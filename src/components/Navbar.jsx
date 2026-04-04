// ============================================================
// NAVBAR.JSX — Fixed top navigation bar
// To add new pages: add an entry to the `navLinks` array
// ============================================================
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

// ── Navigation links config ──
// Add or remove pages by editing this array
const navLinks = [
  { label: 'Resume',       path: '/' },
  { label: 'Life Diary',   path: '/life-diary' },
  { label: 'Publications', path: '/publications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add shadow/blur when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>

        {/* ── Logo ── */}
        <NavLink to="/" className={styles.logo}>
          JT
        </NavLink>

        {/* ── Desktop Links ── */}
        <div className={styles.links}>
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* ── Contact CTA ── */}
        <div className={styles.right}>
          {/* Scrolls to the contact form at the bottom of any page */}
          <a href="#contact" className={styles.contactBtn}>
            Contact
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? styles.bar1Open : styles.bar1} />
            <span className={menuOpen ? styles.bar2Open : styles.bar2} />
            <span className={menuOpen ? styles.bar3Open : styles.bar3} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a href="#contact" className={styles.mobileContact} onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

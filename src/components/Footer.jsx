// ============================================================
// FOOTER.JSX — Shared footer with Netlify contact form
//
// HOW NETLIFY FORMS WORK:
//   1. Netlify detects the `data-netlify="true"` attribute at build time
//   2. Form submissions are captured automatically — no backend needed
//   3. View submissions in your Netlify dashboard → Forms tab
//   4. To get email notifications: Netlify dashboard → Forms → Settings → Notifications
// ============================================================
import { useState } from 'react'
import styles from './Footer.module.css'

// ── Social links — edit href values with your real URLs ──
const socialLinks = [
  { label: 'Email',     href: 'mailto:you@email.com' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/yourprofile' },
  { label: 'GitHub',    href: 'https://github.com/yourusername' },
  { label: 'Instagram', href: 'https://instagram.com/yourhandle' },
]

export default function Footer() {
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus]     = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // ── Netlify form submission handler ──
  // Uses fetch to submit without page reload
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const encoded = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString()

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className={styles.footer}>

      {/* ── Contact Section ── */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.pebble} />

        <div className={styles.contactInner}>
          {/* Left: headline */}
          <div className={styles.contactLeft}>
            <span className={styles.superLabel}>FREE AGENCY</span>
            <h2 className={styles.contactTitle}>
              SIGN THE<br />
              <span className={styles.contactTitleAccent}>PLAYER.</span>
            </h2>
            <p className={styles.contactSub}>
              Open for internships, projects, and high-performance collaborations.
            </p>
          </div>

          {/* Right: form */}
          {/* 
            IMPORTANT FOR NETLIFY:
            The hidden input `form-name` and the `data-netlify` attribute
            are what allow Netlify to detect and capture this form.
            Do NOT remove them.
          */}
          <form
            className={styles.form}
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            {/* Hidden field required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.formRow}>
              {/* Name field */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">YOUR NAME</label>
                <input
                  className={styles.input}
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email field */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">EMAIL ADDRESS</label>
                <input
                  className={styles.input}
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="scout@team.com"
                  required
                />
              </div>
            </div>

            {/* Message field */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">THE SCOUTING BRIEF (MESSAGE)</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                rows={5}
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'SENDING...' : 'SUBMIT FOR REVIEW'}
            </button>

            {/* Success / error messages */}
            {status === 'success' && (
              <p className={styles.successMsg}>
                ✓ Message received. I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div>
          <span className={styles.logoText}>JT PERFORMANCE</span>
          <p className={styles.copyright}>© 2024 JT Performance. All Rights Reserved.</p>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          {socialLinks.map(({ label, href }) => (
            <a key={label} href={href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

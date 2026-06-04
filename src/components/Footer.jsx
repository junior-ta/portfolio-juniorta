// FOOTER with Netlify contact form

import { useState } from 'react'
import styles from './Footer.module.css'

// ── Social links ──
const socialLinks = [
  { label: 'Email',     href: 'mailto:juniorta@buffalo.edu' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/juniorta' },
  { label: 'GitHub',    href: 'https://github.com/junior-ta' },
]

export default function Footer() {
  //Contact Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus]     = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const encoded = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString()

      const res = await fetch('/__forms.html', {
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
          {/* Leftside */}
          <div className={styles.contactLeft}>
            <span className={styles.superLabel}>FREE AGENCY</span>
            <h2 className={styles.contactTitle}>
              SIGN <br />
              <span className={styles.contactTitleAccent}>ME!</span>
            </h2>
            <p className={styles.contactSub}>
              Open for internships, projects, and learning opportunities.
            </p>
          </div>

          {/* Rightside

            The hidden input `form-name` and the `data-netlify` attribute
            are what allow Netlify to detect and capture this form.
            Do NOT remove them.
          */}
          <form
            className={styles.form}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Hidden field required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field for spam protection — hidden from humans */}
            <p style={{ display: 'none' }}>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

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
                  placeholder="Michael Jordan"
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
                  placeholder="GM@knicks.com"
                  required
                />
              </div>
            </div>

            {/* Message field */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">WHY DO YOU WANT ME? (MESSAGE)</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="You can email me directly at juniorta@buffalo.edu"
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
              {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
            </button>

            {/* Success / error messages */}
            {status === 'success' && (
              <p className={styles.successMsg}>
                ✓ Message received. I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Try emailing me directly (link below).
              </p>
            )}
          </form>
        </div>
      </section>

      {/* The Bottom bar */}
      <div className={styles.bottomBar}>
        <div>
          <span className={styles.logoText}>JT PORTFOLIO</span>
          <p className={styles.copyright}>© 2026 JT the future GOAT.</p>
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

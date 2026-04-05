// ============================================================
// pages/Resume.jsx — Main portfolio / resume page
//
// SECTIONS:
//   1. Me
//   2. Bio
//   3. Languages
//   4.Featured Projects
//   5.Featured Projects
//   6. Certifications
//   7. Skills
// ============================================================

import styles from './Resume.module.css'
import {
  hero, education, scoutingReport,
  languages, workExperience, certifications, skills, projects
} from '../data/resume.js'

export default function Resume() {
  return (
    <main className={styles.page}>

      {/* ME */}
      <section className={styles.hero}>
        {/* Photo */}
        <div className={styles.heroPhoto}>
          <img src={hero.photoSrc} alt={hero.photoAlt} className={styles.photo} />
          <span className={styles.statusBadge}>{hero.status}</span>
        </div>

        {/* Headline */}
        <div className={styles.heroContent}>
          <p className={styles.superLabel}>{hero.label}</p>
          <h1 className={styles.heroTitle}>
            {hero.title}<br />
            <span className={styles.heroTitleAccent}>{hero.titleAccent}</span>
          </h1>

          {/* Education card */}
          <div className={styles.eduCard}>
            <div className={styles.eduRow}>
              <span className={styles.eduIcon}>📍</span>
              <div>
                <p className={styles.eduUniversity}>{education.university}</p>
                <p className={styles.eduLocation}>{education.location}</p>
              </div>
            </div>
            <p className={styles.eduDegree}>{education.degree}</p>
            <div className={styles.eduMeta}>
              <div>
                <p className={styles.eduMetaLabel}>EXPECTED GRADUATION</p>
                <p className={styles.eduMetaValue}>{education.graduation}</p>
              </div>
              <div>
                <p className={styles.eduMetaLabel}>CUMULATIVE GPA</p>
                <p className={styles.eduMetaValue}>{education.gpa}</p>
              </div>
            </div>
            <div>
              <p className={styles.courseLabel}>RELEVANT COURSES:</p>
              <p className={styles.courses}>{education.courses.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/*BIO */}
      <section className={styles.section}>
        <div className={styles.scoutCard}>
          <div className={styles.pebble} />
          <p className={styles.superLabelCenter}>THE SCOUTING REPORT (MY STORY)</p>
          <p className={styles.scoutText}>{scoutingReport.text}</p>
        </div>
      </section>

      {/*LANGUAGES*/}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>GLOBAL GAME</span>
          <h2 className={styles.sectionTitle}>LANGUAGES</h2>
        </div>

        <div className={styles.langGrid}>
          {languages.map(({ lang, level, flag, bar }) => (
            <div key={lang} className={styles.langCard}>
              <div className={styles.langTop}>
                <span className={styles.langFlag}>{flag}</span>
                <div>
                  <p className={styles.langName}>{lang}</p>
                  <p className={styles.langLevel}>{level}</p>
                </div>
              </div>
              {/* Proficiency bar */}
              <div className={styles.langBarBg}>
                <div
                  className={styles.langBarFill}
                  style={{ width: `${bar}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>HIGHLIGHT REEL</span>
          <h2 className={styles.sectionTitle}>FEATURED PROJECTS</h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((proj) => (
            <a key={proj.id} href={proj.link} className={styles.projectCard}>
              <div className={styles.projectImgWrap}>
                <img
                  src={proj.imageSrc}
                  alt={proj.imageAlt}
                  className={styles.projectImg}
                />
                <div className={styles.projectOverlay} />
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.projectTag}>{proj.tag}</span>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>CAREER STATS</span>
          <h2 className={styles.sectionTitle}>WORK EXPERIENCE</h2>
        </div>

        <div className={styles.workGrid}>
          {workExperience.map((job, i) => (
            <div key={i} className={styles.workCard}>
              {/* Job title + period */}
              <div className={styles.workTop}>
                <div>
                  <h3 className={styles.workRole}>{job.role}</h3>
                  <p className={styles.workCompany}>{job.company}</p>
                </div>
                <span className={styles.workPeriod}>{job.period}</span>
              </div>
              {/* Bullet points */}
              <ul className={styles.workBullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} className={styles.workBullet}>
                    <span className={styles.bulletDot} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — CERTIFICATIONS & BADGES
          To add certs: edit src/data/resume.js → certifications array
          Badge images: put them in /public/badges/ and use '/badges/name.png'
      ══════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>HALL OF FAME</span>
          <h2 className={styles.sectionTitle}>CERTIFICATIONS</h2>
        </div>

        <div className={styles.certGrid}>
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <div className={styles.certBadge}>
                <img src={cert.imageUrl} alt={cert.title} className={styles.certImg} />
              </div>
              <div className={styles.certInfo}>
                <p className={styles.certTitle}>{cert.title}</p>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDate}>{cert.date}</p>
              </div>
              <span className={styles.certArrow}>↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS*/}
      <section className={styles.section}>
        <div className={styles.arsenalWrap}>
          <div className={styles.arsenalLeft}>
            <h2 className={styles.arsenalTitle}>
              BAG<br />
              <span className={styles.arsenalTitleAccent}>TECHNICAL SKILLS</span>
            </h2>
            <p className={styles.arsenalSub}>
              "Soft skills are like oil that greases the wheels of business success." 
            </p>
          </div>

          <div className={styles.skillGrid}>
            {skills.map(({ icon, label, category }) => (
              <div key={label} className={styles.skillCard}>
                <span className={styles.skillIcon}>{icon}</span>
                <p className={styles.skillLabel}>{label}</p>
                <p className={styles.skillCategory}>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

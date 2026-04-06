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
            <div key={proj.id} className={styles.projectCard}>
              {/* Project image with grayscale hover effect */}
              <div className={styles.projectImgWrap}>
                <img
                  src={proj.imageSrc}
                  alt={proj.imageAlt}
                  className={styles.projectImg}
                />
                <div className={styles.projectOverlay} />
              </div>

              {/* Info + buttons at the bottom */}
              <div className={styles.projectInfo}>
                <span className={styles.projectTag}>{proj.tag}</span>
                <h3 className={styles.projectTitle}>{proj.title}</h3>

                {/* Demo + GitHub buttons */}
                <div className={styles.projectBtns}>
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnDemo}
                    onClick={e => e.stopPropagation()}
                  >
                    ▶ DEMO
                  </a>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnGithub}
                    onClick={e => e.stopPropagation()}
                  >
                    {/* GitHub SVG icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
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

      {/*  CERTIFICATIONS & BADGES */}
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

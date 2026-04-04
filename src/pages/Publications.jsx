// ============================================================
// pages/Publications.jsx — Editorial publications page
// To edit content: src/data/publications.js
// ============================================================
import styles from './Publications.module.css'
import { pubMeta, articles } from '../data/publications.js'

// Split articles by type
const featured   = articles.find(a => a.featured)
const gridItems  = articles.filter(a => !a.featured)

export default function Publications() {
  return (
    <main className={styles.page}>

      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <span className={styles.superLabel}>{pubMeta.label}</span>
        <div className={styles.titleRow}>
          <h1 className={styles.pageTitle}>
            {pubMeta.title}<br />
            <span className={styles.pageTitleAccent}>{pubMeta.titleAccent}</span>
          </h1>
          <p className={styles.subtitle}>{pubMeta.subtitle}</p>
        </div>
      </section>

      {/* ── Featured Article (hero layout) ── */}
      {featured && (
        <section className={styles.featuredSection}>
          <div className={styles.featuredCard}>
            {/* Left: image */}
            <div className={styles.featuredImageWrap}>
              <img
                src={featured.imageSrc}
                alt={featured.imageAlt}
                className={styles.featuredImage}
              />
            </div>

            {/* Right: content */}
            <div className={styles.featuredContent}>
              {/* Big decorative number */}
              <div className={styles.featuredNumber}>04</div>

              <span className={styles.featuredTag}>{featured.tag}</span>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>

              <a href={featured.link} className={styles.readBtn}>
                {featured.readLabel}
                <span className={styles.readArrow}>→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Article Grid (bento style) ── */}
      <section className={styles.gridSection}>
        <div className={styles.bentoGrid}>

          {gridItems.map(article => {
            // ── Wide article card (spans 2 cols) ──
            if (article.wide && article.imageSrc) {
              return (
                <article key={article.id} className={`${styles.card} ${styles.cardWide} ${styles.cardWithImage}`}>
                  <div className={styles.cardImageThumb}>
                    <img
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      className={styles.thumbImg}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardTag}>{article.tag}</span>
                    <h3 className={styles.cardTitle}>{article.title}</h3>
                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                    <div className={styles.cardMeta}>
                      <span>{article.date}</span>
                      {article.readTime && (
                        <span className={styles.readTime}>⏱ {article.readTime}</span>
                      )}
                    </div>
                  </div>
                </article>
              )
            }

            // ── Wide article card (spans 2 cols, no image) ──
            if (article.wide && !article.imageSrc) {
              return (
                <article key={article.id} className={`${styles.card} ${styles.cardWide}`}>
                  <div className={styles.pebble} />
                  <div className={styles.cardHeader}>
                    <span className={styles.cardTag}>{article.tag}</span>
                    <span className={styles.cardDate}>{article.date}</span>
                  </div>
                  <h3 className={`${styles.cardTitle} ${styles.cardTitleLg}`}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <a href={article.link} className={styles.viewLink}>{article.readLabel}</a>
                    {article.icon && (
                      <span className={styles.cardIcon}>📊</span>
                    )}
                  </div>
                </article>
              )
            }

            // ── Highlight card (primary-container bg) ──
            if (article.highlight) {
              return (
                <article key={article.id} className={`${styles.card} ${styles.cardHighlight}`}>
                  <div className={styles.highlightAcronym}>{article.acronym}</div>
                  <div className={styles.highlightBody}>
                    <span className={styles.highlightTag}>{article.tag}</span>
                    <h3 className={styles.highlightTitle}>{article.title}</h3>
                  </div>
                  <a href={article.link} className={styles.highlightArrow}>↗</a>
                </article>
              )
            }

            // ── Default card ──
            return (
              <article key={article.id} className={styles.card}>
                <div className={styles.pebble} />
                <span className={styles.cardTag}>{article.tag}</span>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleItalic}`}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>{article.date}</span>
                  {article.icon && <span className={styles.cardIconSm}>🧠</span>}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className={styles.newsletter}>
        <div className={styles.pebble} />
        <div className={styles.newsletterInner}>
          <div>
            <h2 className={styles.newsletterTitle}>JOIN THE ROSTER</h2>
            <p className={styles.newsletterSub}>
              Receive weekly deep-dives into athletic performance, design systems, and court culture.
            </p>
          </div>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="SCOUT@TEAM.COM"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterBtn}>SUBSCRIBE</button>
          </div>
        </div>
      </section>

    </main>
  )
}

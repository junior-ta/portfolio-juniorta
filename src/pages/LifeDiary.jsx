import styles from './LifeDiary.module.css'
import { diaryMeta, posts } from '../data/diary.js'

// Display types
const featuredPost   = posts.find(p => p.featured)
const secondaryPost  = posts.find(p => !p.featured && !p.compact && !p.imageSrc && p.id === 2)
const imagePost      = posts.find(p => !p.featured && p.imageSrc)
const culturePost    = posts.find(p => p.categories && p.categories.length > 0)
const compactPosts   = posts.filter(p => p.compact)

export default function LifeDiary() {
  return (
    <main className={styles.page}>

      {/* Header*/}
      <section className={styles.pageHeader}>
        <span className={styles.archiveLabel}>{diaryMeta.label}</span>
        <div className={styles.titleRow}>
          <h1 className={styles.pageTitle}>
            {diaryMeta.title} <span className={styles.pageTitleAccent}>{diaryMeta.titleAccent}</span>
          </h1>
          {/* Vertical decoration */}
          <div className={styles.verticalYear}>
            <span className={styles.yearLabel}>ESTABLISHED</span>
            <span className={styles.year}>2026</span>
          </div>
        </div>
        <p className={styles.subtitle}>{diaryMeta.subtitle}</p>
      </section>

      {/*  Main bento grid  */}
      <section className={styles.mainGrid}>

        {/* Featured big post (left, tall) */}
        {featuredPost && (
          <article className={styles.featuredCard}>
            <div className={styles.featuredMeta}>
              <span className={styles.tagBadge}>{featuredPost.tag}</span>
              <span className={styles.dateLabel}>{featuredPost.date}</span>
            </div>
            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
            <a href="#" className={styles.readLink}>
              {featuredPost.readLabel} →
            </a>
          </article>
        )}

        {/* Secondary post (right, top) */}
        {secondaryPost && (
          <article className={styles.secondaryCard}>
            <span className={styles.secondaryTag}>{secondaryPost.tag}</span>
            <h3 className={styles.secondaryTitle}>{secondaryPost.title}</h3>
            <p className={styles.secondaryExcerpt}>{secondaryPost.excerpt}</p>
            <div className={styles.secondaryFooter}>
              <span className={styles.dateSmall}>{secondaryPost.date}</span>
              <a href="#" className={styles.arrowBtn}>↗</a>
            </div>
          </article>
        )}
      </section>

      {/* Secondary row: image card + culture card */}
      <section className={styles.secondRow}>

        {/* Image card */}
        {imagePost && (
          <article className={styles.imageCard}>
            <div className={styles.imageWrap}>
              <img src={imagePost.imageSrc} alt={imagePost.imageAlt} className={styles.postImage} />
            </div>
            <div className={styles.imageCardBody}>
              <span className={styles.tagSmall}>{imagePost.tag}</span>
              <h3 className={styles.imageCardTitle}>{imagePost.title}</h3>
              <p className={styles.imageCardExcerpt}>{imagePost.excerpt}</p>
              <span className={styles.dateSmall}>{imagePost.date}</span>
            </div>
          </article>
        )}

        {/* Culture card */}
        {culturePost && (
          <article className={styles.cultureCard}>
            <span className={styles.tagSmall}>{culturePost.tag}</span>
            <h3 className={styles.cultureTitle}>{culturePost.title}</h3>
            <p className={styles.cultureExcerpt}>{culturePost.excerpt}</p>
            <div className={styles.cultureTags}>
              {culturePost.categories.map(c => (
                <span key={c} className={styles.categoryPill}>{c}</span>
              ))}
            </div>
            <div className={styles.cultureNumber}>#04</div>
          </article>
        )}
      </section>

      {/* Compact list posts  */}
      {compactPosts.length > 0 && (
        <section className={styles.compactRow}>
          {compactPosts.map(post => (
            <article key={post.id} className={styles.compactCard}>
              <span className={styles.compactIcon}>{post.icon || '📄'}</span>
              <div className={styles.compactBody}>
                <span className={styles.compactTag}>{post.tag}</span>
                <h4 className={styles.compactTitle}>{post.title}</h4>
              </div>
            </article>
          ))}

          {/* Numbered compact entry */}
          <article className={styles.numberedCard}>
            <span className={styles.entryNumber}>05</span>
            <div>
              <h4 className={styles.numberedTitle}>THE ART OF THE TRASH TALK.</h4>
              <p className={styles.numberedMeta}>PSYCHOLOGY // JAN 12, 2024</p>
            </div>
            <span className={styles.numberedArrow}>→</span>
          </article>
        </section>
      )}

    </main>
  )
}

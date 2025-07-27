import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mighty Wings - Best Wings in Town</title>
        <meta name="description" content="Delicious wings, sides, and drinks. Family-owned restaurant serving the best wings in town." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to Mighty Wings!</h1>
          <p className={styles.heroSubtitle}>
            Classic Buffalo Style Wings & More - Serving Kissimmee since day one!
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🔥</span>
              <h3>14 Amazing Flavors</h3>
              <p>From Mild to Mighty Hot, plus Asian Sweet BBQ and Garlic Parmesan</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🍗</span>
              <h3>Fresh Wings</h3>
              <p>Traditional wings, boneless wings, and crispy chicken tenders</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🏪</span>
              <h3>Two Locations</h3>
              <p>Convenient locations on Vine Street and Fortune Road in Kissimmee</p>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose Mighty Wings?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Unbeatable Prices</h3>
              <p>From 6 wings for $6 to our 50-wing party packs, we offer the best value in Kissimmee. Family specials include fries and soda!</p>
            </div>
            <div className={styles.card}>
              <h3>14 Signature Flavors</h3>
              <p>Choose from Mild, Med, Hot, Mighty Hot, Garlic, Honey, Teriyaki, Cajun, Honey Mustard, BBQ, Lemon Pepper, Garlic Parmesan, Asian Sweet BBQ, and Spicy Sweet & Sour!</p>
            </div>
            <div className={styles.card}>
              <h3>Fast Service</h3>
              <p>Quick service without sacrificing quality. Perfect for dine-in, takeout, or delivery to satisfy your wing cravings.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.callToAction}>
            <h2>Ready to try our amazing wings?</h2>
            <p>Visit us today or browse our menu to see all our delicious options!</p>
            <div className={styles.ctaButtons}>
              <a href="/menu" className={styles.button}>
                View Menu
              </a>
              <a href="/contact" className={styles.buttonSecondary}>
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

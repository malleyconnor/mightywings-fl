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
            Home of the best wings in town, where flavor meets tradition.
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🔥</span>
              <h3>Authentic Flavors</h3>
              <p>Hand-crafted sauces and seasonings made fresh daily</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🍗</span>
              <h3>Fresh Wings</h3>
              <p>Never frozen, always crispy, cooked to perfection</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>❤️</span>
              <h3>Family Owned</h3>
              <p>Serving our community with love since day one</p>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose Mighty Wings?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Premium Quality</h3>
              <p>We source only the finest ingredients and never compromise on quality. Our wings are hand-selected and prepared fresh daily.</p>
            </div>
            <div className={styles.card}>
              <h3>Unique Flavors</h3>
              <p>From classic Buffalo to our signature Nashville Hot, we offer flavors you won't find anywhere else in town.</p>
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

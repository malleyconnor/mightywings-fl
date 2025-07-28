import Head from 'next/head';
import Image from 'next/image';
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
          <h1 className={styles.heroTitle}>Welcome to Mighty Wings</h1>
          <div className={styles.heroImageContainer}>
            <Image
              src="/outside_front.jpg"
              alt="Mighty Wings Store Front"
              className="heroImage"
              width={550}
              height={367}
              priority
            />
          </div>
          <p className={styles.heroSubtitle}>
            Serving the best wings in Kissimmee, FL since 1995.
          </p>
          
          <div className={styles.heroFeatures}>
            <div className={styles.feature}>
              <h3>14 Amazing Flavors</h3>
            </div>
            <div className={styles.heroImageContainer}>
              <Image
                src="/honey-bbq-chicken-wing-sauce.jpg"
                alt="Mighty Wings Store Front"
                className="heroImage"
                width={1200}
                height={670}
                priority
              />
            </div>
            <div className={styles.feature}>
              <h3>Wings, Tenders, and Fries</h3>
            </div>
            <div className={styles.heroImageContainer}>
              <Image
                src="/wings.jpg"
                alt="Mighty Wings Store Front"
                className="heroImage"
                width={1200}
                height={1200}
                priority
              />
            </div>
            <div className={styles.feature}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.834434823956!2d-81.34933029999999!3d28.303339099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd85e2b9fbbaed%3A0xababad4cccf5878a!2sMighty%20Wings!5e0!3m2!1sen!2sus!4v1753660451685!5m2!1sen!2sus" 
                width="400" 
                height="300" 
                loading="lazy"
              />
            </div>
            <div className={styles.feature}>
              <a href="geo:28.303339,-81.349330?q=2330+Fortune+Road+Kissimee+FL+34744">
                2330 Fortune Road, Kissimee, FL 34744
              </a>
              <span className={styles.mapLinks}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=2330+Fortune+Road+Kissimee+FL+34744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </a>
                <a 
                  href="https://maps.apple.com/?q=2330+Fortune+Road+Kissimee+FL+34744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>

      </Layout>
    </>
  );
}

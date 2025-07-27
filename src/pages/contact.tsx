import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Contact() {
  const contactInfo = {
    phone: "(555) 123-WING",
    email: "info@mightywings.com",
    address: "123 Wing Street, Food City, FC 12345"
  };

  return (
    <>
      <Head>
        <title>Contact Us - Mighty Wings</title>
        <meta name="description" content="Get in touch with Mighty Wings. Find our address, phone number, and email. We'd love to hear from you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            We'd love to hear from you! Get in touch with any questions or feedback.
          </p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactCard}>
            <h2 className={styles.cardTitle}>Get In Touch</h2>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>📞 Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className={styles.contactLink}>
                  {contactInfo.phone}
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>📧 Email:</span>
                <a href={`mailto:${contactInfo.email}`} className={styles.contactLink}>
                  {contactInfo.email}
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>📍 Address:</span>
                <span className={styles.contactText}>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div className={styles.mapCard}>
            <h2 className={styles.cardTitle}>Find Us</h2>
            <div className={styles.mapPlaceholder}>
              <p>🗺️ Interactive map coming soon!</p>
              <p>Located in the heart of Food City, easily accessible with plenty of parking.</p>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>🚗 Parking</h3>
            <p>Free parking available in our lot. Street parking also available on Wing Street and nearby side streets.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>🚌 Public Transit</h3>
            <p>Conveniently located near bus stops. Routes 15, 23, and 45 all stop within 2 blocks of our restaurant.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>♿ Accessibility</h3>
            <p>Our restaurant is fully wheelchair accessible with ADA-compliant restrooms and seating areas.</p>
          </div>
        </div>

        <div className={styles.feedbackSection}>
          <h2>We Value Your Feedback</h2>
          <p>
            Your opinion matters to us! Whether you have a suggestion, compliment, or concern, 
            we want to hear from you. Call us, email us, or stop by in person.
          </p>
          <div className={styles.socialLinks}>
            <p><strong>Follow us on social media for updates and specials!</strong></p>
            <div className={styles.socialPlaceholders}>
              <span>📘 Facebook</span>
              <span>📷 Instagram</span>
              <span>🐦 Twitter</span>
            </div>
          </div>
        </div>

        <div className={styles.callToAction}>
          <h2>Ready to visit?</h2>
          <p>Come hungry, leave happy! Check out our menu or see our current hours.</p>
          <div className={styles.ctaButtons}>
            <a href="/menu" className={styles.button}>
              View Menu
            </a>
            <a href="/hours" className={styles.buttonSecondary}>
              See Hours
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}

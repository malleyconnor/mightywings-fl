import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Contact() {
  const locations = [
    {
      name: "Fortune Road", 
      address: "2330 Fortune Road, Kissimmee, FL 34744",
      phone: "(407) 978-6023",
      isMain: true
    }
  ];

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
          {locations.map((location, index) => (
            <div key={index} className={styles.contactCard}>
              <h2 className={styles.cardTitle}>{location.name}</h2>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>� Address:</span>
                  <span className={styles.contactText}>{location.address}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>� Phone:</span>
                  <a href={`tel:${location.phone}`} className={styles.contactLink}>
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>�️ Takeout & Delivery</h3>
            <p>Call ahead for quick pickup or ask about delivery options in the Kissimmee area.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>🎉 Catering</h3>
            <p>Perfect for parties! Our family specials and wing platters feed groups of any size.</p>
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

      </Layout>
    </>
  );
}

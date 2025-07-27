import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Contact() {
  const locations = [
    {
      name: "Vine Street Location",
      address: "53 West Vine Street, Kissimmee, FL 34741",
      phone: "(407) 846-4313",
      isMain: true
    },
    {
      name: "Fortune Road Location", 
      address: "2330 Fortune Road, Kissimmee, FL 34744",
      phone: "(407) 978-6023",
      isMain: false
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

        <div className={styles.contactCard} style={{maxWidth: '800px', margin: '0 auto 3rem'}}>
          <h2 className={styles.cardTitle}>Get In Touch</h2>
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>📧 Email:</span>
              <a href="mailto:info@mightywings.com" className={styles.contactLink}>
                info@mightywings.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>🌐 Website:</span>
              <span className={styles.contactText}>mightywings.com</span>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>🚗 Parking</h3>
            <p>Free parking available at both locations. Convenient street parking also available.</p>
          </div>
          
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

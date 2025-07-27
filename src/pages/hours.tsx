import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Hours() {
  const hours = {
    "Monday - Thursday": "11:00 AM - 10:00 PM",
    "Friday - Saturday": "11:00 AM - 11:00 PM",
    "Sunday": "12:00 PM - 9:00 PM"
  };

  const specialHours = [
    { date: "Christmas Day", hours: "Closed" },
    { date: "New Year's Day", hours: "2:00 PM - 8:00 PM" },
    { date: "Thanksgiving", hours: "12:00 PM - 6:00 PM" },
  ];

  return (
    <>
      <Head>
        <title>Hours - Mighty Wings</title>
        <meta name="description" content="Find our restaurant hours and plan your visit to Mighty Wings. Open 7 days a week." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Hours of Operation</h1>
          <p className={styles.pageSubtitle}>
            We're open 7 days a week to serve you the best wings in town
          </p>
        </div>

        <div className={styles.hoursContainer}>
          <div className={styles.hoursCard}>
            <h2 className={styles.cardTitle}>Regular Hours</h2>
            <div className={styles.hours}>
              {Object.entries(hours).map(([day, time]) => (
                <div key={day} className={styles.hourRow}>
                  <span className={styles.day}>{day}</span>
                  <span className={styles.time}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.hoursCard}>
            <h2 className={styles.cardTitle}>Holiday Hours</h2>
            <div className={styles.hours}>
              {specialHours.map((holiday) => (
                <div key={holiday.date} className={styles.hourRow}>
                  <span className={styles.day}>{holiday.date}</span>
                  <span className={styles.time}>{holiday.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>🍽️ Dine-In Service</h3>
            <p>Full service dining available during all operating hours. No reservations required - first come, first served!</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>🥡 Takeout & Delivery</h3>
            <p>Order online or call ahead for quick pickup. Delivery available through major delivery apps until 30 minutes before closing.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>🎉 Group Orders</h3>
            <p>Planning a party? Call ahead for large orders. We recommend ordering 2+ hours in advance for groups of 10 or more.</p>
          </div>
        </div>

        <div className={styles.callToAction}>
          <h2>Questions about our hours?</h2>
          <p>Give us a call or visit our contact page for more information.</p>
          <div className={styles.ctaButtons}>
            <a href="tel:(555) 123-WING" className={styles.button}>
              Call Now
            </a>
            <a href="/contact" className={styles.buttonSecondary}>
              Contact Info
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}

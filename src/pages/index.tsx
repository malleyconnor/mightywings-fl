import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

interface MenuItem {
  name: string;
  description: string | JSX.Element;
  price: string;
}

interface MenuCategory {
  category: string;
  description?: string;
  items: MenuItem[];
}

export default function Home() {
  const sauceOptions = [
    "Mild", "Med", "Hot", "Mighty Hot", "Garlic", "Honey", "Teriyaki", 
    "Cajun", "Honey Mustard", "BBQ", "Lemon & Pepper", "Garlic Parmesan", 
    "Asian Sweet BBQ", "Spicy Sweet & Sour"
  ];

  const menuData: MenuCategory[] = [
    {
      category: "Wings",
      items: [
        { name: "6 Wings", description: <>Tossed in your <a href="#flavors">choice of sauces</a></>, price: "$6.00" },
        { name: "9 Wings", description: "", price: "$9.00" },
        { name: "12 Wings", description: "", price: "$12.00" },
        { name: "18 Wings", description: "", price: "$18.00" },
        { name: "25 Wings", description: "", price: "$25.00" },
        { name: "36 Wings", description: "", price: "$36.00" },
        { name: "50 Wings", description: "", price: "$50.00" },
      ]
    },
    {
      category: "Boneless Wings",
      items: [
        { name: "10 Boneless & Fries", description: <>Tossed in your <a href="#flavors">choice of flavor</a></>, price: "$7.75" },
        { name: "15 Boneless & Fries", description: "", price: "$10.75" },
        { name: "20 Boneless & Fries", description: "", price: "$13.75" },
      ]
    },
    {
      category: "Chicken Tenders",
      items: [
        { name: "3 Tenders", description: "Crispy chicken tenders", price: "$6.00" },
        { name: "5 Tenders", description: "", price: "$9.75" },
        { name: "8 Tenders", description: "", price: "$15.00" },
        { name: "8 Tenders & Large Fries", description: "", price: "$18.75" },
      ]
    },
    {
      category: "Family Specials",
      description: "Each Family Special comes with Extra Large Fries & Liter Soda",
      items: [
        { name: "36 Wings Family Special", description: "", price: "$45.75" },
        { name: "50 Wings Family Special", description: "", price: "$59.75" },
        { name: "25 Boneless & 20 Wings", description: "", price: "$44.75" },
        { name: "35 Boneless & 30 Wings", description: "", price: "$58.75" },
      ]
    },
    {
      category: "Side Orders",
      items: [
        { name: "Fried Cheese Sticks (5pcs)", description: "", price: "$4.25" },
        { name: "Small Fries", description: "", price: "$2.00" },
        { name: "Small Fries with Cheese", description: "", price: "$3.00" },
        { name: "Large Fries", description: "", price: "$4.00" },
        { name: "Large Fries with Cheese", description: "", price: "$5.75" },
        { name: "Extra Large Fries", description: "", price: "$7.95" },
        { name: "Small Onion Rings", description: "", price: "$3.00" },
        { name: "Large Onion Rings", description: "", price: "$5.95" },
        { name: "Egg Roll", description: "", price: "$1.25" },
        { name: "Celery & Dressing (Small)", description: "", price: "$2.00" },
        { name: "Celery & Dressing (Large)", description: "", price: "$4.00" },
      ]
    },
    {
      category: "Extras & Sauces",
      items: [
        { name: "Add Fries to any meal", description: "", price: "+$1.75" },
        { name: "All Flats or Drums (6-9 wings)", description: "", price: "$0.50" },
        { name: "All Flats or Drums (12-18 wings)", description: "", price: "$0.75 - $1.00" },
        { name: "All Flats or Drums (25-36 wings)", description: "", price: "$1.50 - $2.00" },
        { name: "All Flats or Drums (50 wings)", description: "", price: "$3.00" },
        { name: "Extra Sauce (Small)", description: "Ranch, blue cheese, wing sauce, or cheese sauce", price: "$0.50" },
        { name: "Extra Sauce (Large)", description: "", price: "$1.00" },
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Mighty Wings - Best Wings in Town</title>
        <meta name="description" content="Delicious wings, sides, and drinks. Family-owned restaurant serving the best wings in town." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero Section with Large Image */}
        <section className={styles.heroSection}>
          <div className={styles.heroImageFull}>
            <Image
              src="/outside_front.jpg"
              alt="Mighty Wings Store Front"
              width={1920}
              height={1080}
              className={styles.heroImageFullImg}
              priority
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitleLarge}>Welcome to Mighty Wings</h1>
              <p className={styles.heroSubtitleLarge}>
                Serving the best wings in Kissimmee, FL since 1995
              </p>
            </div>
            
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className={styles.homeSection}>
          <div className={styles.pageHeader}>
            <h2 className={styles.pageTitle}>Our Menu</h2>
            <p className={styles.pageSubtitle}>
              Classic Buffalo Style Wings & More
            </p>
          </div>

          <div className={styles.sauceSection} id="flavors">
            <h3 className={styles.sauceTitle}>Choose Your Flavor</h3>
            <p className={styles.sauceDescription}>All wings and boneless wings come with your choice of these amazing flavors</p>
            <p className={styles.sauceNote}><strong>*You can mix any combination of sauces</strong></p>
            <div className={styles.sauceOptionsGrid}>
              {sauceOptions.map((sauce, index) => (
                <div key={index} className={styles.sauceOption}>
                  <span className={styles.itemName}>{sauce}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.menuContainer}>
            {menuData.map((category) => (
              <section key={category.category} className={styles.menuCategory}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                {category.description && (
                  <p className={styles.categoryDescription}>{category.description}</p>
                )}
                <div className={styles.menuGrid}>
                  {category.items.map((item) => (
                    <div key={item.name} className={styles.menuItem}>
                      <div className={styles.itemInfo}>
                        <h4 className={styles.itemName}>{item.name}</h4>
                        {item.description && (
                          <p className={styles.itemDescription}>{item.description}</p>
                        )}
                      </div>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Hours Section */}
        <section id="hours" className={styles.homeSection}>
          <div className={styles.hoursContainer}>
            <div className={styles.hoursCard}>
              <h2 className={styles.hoursTitle}>Hours of Operation</h2>
              <div className={styles.hoursInfo}>
                <p><strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
                <p><strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM</p>
                <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
              </div>
              <div className={styles.specialHours}>
                <p><strong>Holiday Hours May Vary</strong></p>
                <p>Please call ahead on holidays to confirm our hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.homeSection}>
          <div className={styles.contactContainer}>
            <div className={styles.contactSection}>
              <h2 className={styles.contactTitle}>Contact Information</h2>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Phone</div>
                  <div className={styles.contactValue}>
                    <a href="tel:407-396-9464" className={styles.contactLink}>(407) 396-9464</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Address</div>
                  <div className={styles.contactValue}>
                    <a href="geo:28.303339,-81.349330?q=2330+Fortune+Road+Kissimee+FL+34744" className={styles.contactLink}>
                      2330 Fortune Road<br />
                      Kissimmee, FL 34744
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.mapLinks}>

                  <div className={styles.mapCard}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.834434823956!2d-81.34933029999999!3d28.303339099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd85e2b9fbbaed%3A0xababad4cccf5878a!2sMighty%20Wings!5e0!3m2!1sen!2sus!4v1753660451685!5m2!1sen!2sus" 
                      width="100%" 
                      height="300" 
                      loading="lazy"
                      className={styles.mapIframe}
                    />
                  </div>
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
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </Layout>
    </>
  );
}

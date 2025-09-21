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
  title: string;
  subtitle?: string | JSX.Element;
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
      title: "Classic Wings",
      subtitle: <>Tossed in your <a href="#flavors">choice of sauces</a></> ,
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
      title: "Boneless Wings",
      subtitle: <>Tossed in your <a href="#flavors">choice of sauces</a></>,
      items: [
        { name: "10 Boneless & Fries", description: "", price: "$7.75" },
        { name: "15 Boneless & Fries", description: "", price: "$10.75" },
        { name: "20 Boneless & Fries", description: "", price: "$13.75" },
      ]
    },
    {
      title: "Crispy Chicken Tenders",
      subtitle: <>Tossed in your <a href="#flavors">choice of sauces</a></>,
      items: [
        { name: "3 Tenders", description: "", price: "$6.00" },
        { name: "5 Tenders", description: "", price: "$9.75" },
        { name: "8 Tenders", description: "", price: "$15.00" },
        { name: "8 Tenders & Large Fries", description: "", price: "$18.75" },
      ]
    },
    {
      title: "Family Specials",
      subtitle: "Comes with Extra Large Fries & a 2-Liter Soda",
      items: [
        { name: "36 Classic Wings", description: "", price: "$45.75" },
        { name: "50 Classic Wings", description: "", price: "$59.75" },
        { name: "25 Boneless Wings & 20 Classic Wings", description: "", price: "$44.75" },
        { name: "35 Boneless Wings & 30 Classic Wings", description: "", price: "$58.75" },
      ]
    },
    {
      title: "Sides",
      items: [
        { name: "Fried Cheese Sticks (5pcs)", description: "", price: "$4.25" },
        { name: "Fries (Small)", description: "", price: "$2.00" },
        { name: "Fries (Large)", description: "", price: "$4.00" },
        { name: "Fries (Extra Large)", description: "", price: "$7.95" },
        { name: "Cheese Fries (Small)", description: "", price: "$3.00" },
        { name: "Cheese Fries (Large)", description: "", price: "$5.75" },
        { name: "Onion Rings (Small)", description: "", price: "$3.00" },
        { name: "Onion Rings (Large)", description: "", price: "$5.95" },
        { name: "Celery & Dressing (Small)", description: "", price: "$2.00" },
        { name: "Celery & Dressing (Large)", description: "", price: "$4.00" },
        { name: "Egg Roll (1pc)", description: "", price: "$1.25" },
      ]
    },
    {
      title: "Extras",
      subtitle: "Add to any order",
      items: [
        { name: "Add Fries to any meal", description: "", price: "+$1.75" },
        { name: "All Flats or Drums (6-9 wings)", description: "", price: "+$0.50" },
        { name: "All Flats or Drums (12-18 wings)", description: "", price: "+$0.75 - $1.00" },
        { name: "All Flats or Drums (25-36 wings)", description: "", price: "+$1.50 - $2.00" },
        { name: "All Flats or Drums (50 wings)", description: "", price: "+$3.00" },
        { name: "Extra Sauce (Small)", description: "Ranch, blue cheese, wing sauce, or cheese sauce", price: "+$0.50" },
        { name: "Extra Sauce (Large)", description: "", price: "+$1.00" },
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
              src="/photos/home/mosaic_home.png"
              alt="Mighty Wings Home Mosaic"
              className={styles.heroImageFullImg}
              layout="fill"
              priority
            />
            <div className={styles.heroOverlay}>
              <p className={styles.heroSubtitleLarge}>
                Serving the best wings in Kissimmee, FL since 1995
              </p>
              <button 
                className={styles.menuButton}
                onClick={() => {
                  const menuSection = document.getElementById('menu');
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                See Our Menu
                <svg className={styles.menuButtonArrow} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className={styles.homeSection}>
        <div className={styles.homeSectionContent}>
        <div className={styles.menuContainer}>
            {menuData.map((category) => (
              <section key={category.title} className={`${styles.card} ${styles.menuCard}`}>
                <div className={styles.menuHeader}>
                  <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>{category.title}</h3>
                  {category.subtitle && (
                    <span style={{ textAlign: 'right', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{category.subtitle}</span>
                  )}
                </div>
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
        </div>
        </section>
        {/* End Menu */}

        {/* Sauces */}
        <section id="flavors" className={styles.homeSection}>
        <div className={styles.homeSectionContent}>
        <div className={styles.menuContainer}>
            <div className={`${styles.card} ${styles.menuCard}`}>
                  <div className={styles.menuHeader}>
                    <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>Sauces</h3>
                      <span style={{ textAlign: 'right', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Wings and tenders come with any combination of these amazing flavors</span>
                  </div>
                <div className={styles.sauceOptionsGrid}>
                  {sauceOptions.map((sauce, index) => (
                    <div key={index} className={styles.sauceOption}>
                      <span className={styles.itemName}>{sauce}</span>
                    </div>
                  ))}
                </div>
            </div>
        </div>
        </div>
        </section>
        {/* End Sauces */}

        {/* Hours */}
        <section id="hours" className={styles.homeSection}>
        <div className={styles.homeSectionContent}>
        <div className={styles.menuContainer}>
            <div className={`${styles.card} ${styles.menuCard}`}>
                  <div className={styles.menuHeader}>
                    <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>Hours of Operation</h3>
                      <span style={{ textAlign: 'right', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Holiday hours may vary, please call to confirm</span>
                  </div>
                  <div className={styles.hoursInfo}>
                    <div className={styles.hoursDay}>Monday - Thursday:</div>
                    <div className={styles.hoursTime}>11:00 AM - 9:00 PM</div>
                    
                    <div className={styles.hoursDay}>Friday - Saturday:</div>
                    <div className={styles.hoursTime}>11:00 AM - 10:00 PM</div>
                    
                    <div className={styles.hoursDay}>Sunday:</div>
                    <div className={styles.hoursTime}>12:00 PM - 9:00 PM</div>
                  </div>
            </div>
        </div>
        </div>
        </section>
        {/* End Hours */}

        {/* Contact */}
        <section id="contact" className={styles.homeSection}>
        <div className={styles.homeSectionContent}>
        <div className={styles.menuContainer}>
            <div className={`${styles.card} ${styles.menuCard}`}>
              <div className={styles.menuHeader}>
                <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>Contact Information</h3>
              </div>

              <div className={styles.contactLayout}>
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
                </div>

                <div className={styles.mapCard}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.668869647912!2d-81.35231539999999!3d28.303339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.5!3m3!1m2!1s0x88dd85e2b9fbbaed%3A0xababad4cccf5878a!2sMighty%20Wings!5e0!3m2!1sen!2sus!4v1753660451685!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    loading="lazy"
                    className={styles.mapIframe}
                  />
                </div>
              </div>
            </div>
        </div>
        </div>
        </section>
        {/* End Contact */}

        {/* Gallery */}
        <section id="gallery" className={styles.homeSection}>
        <div className={styles.homeSectionContent}>
        <div className={styles.menuContainer}>
            <div className={`${styles.card} ${styles.menuCard}`}>
              <div className={styles.menuHeader}>
                <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>Photo Gallery</h3>
              </div>
              <div className={styles.galleryGrid}>
                <div className={styles.galleryItem}>
                  <Image
                    src="/photos/home/wings.JPG"
                    alt="Delicious Wings"
                    width={300}
                    height={200}
                    className={styles.galleryImage}
                  />
                </div>
              <div className={styles.galleryItem}>
                <Image
                  src="/photos/home/cooking.JPG"
                  alt="Cooking in Action"
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image
                  src="/photos/home/inside_front.JPG"
                  alt="Restaurant Interior"
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image
                  src="/photos/home/outside_front.png"
                  alt="Restaurant Exterior"
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image
                  src="/photos/menu/burger.JPEG"
                  alt="Delicious Burger"
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image
                  src="/photos/menu/garlic_parm_fry.JPEG"
                  alt="Garlic Parmesan Fries"
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
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

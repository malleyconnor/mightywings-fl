import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';
import { getContentConfig, getGalleryImages } from '../utils/content';
import parse from 'html-react-parser';


interface Options {
  [key: string]: string;
}

interface MenuItem {
  name: string;
  description: string | JSX.Element;
  options: Options;
}

interface MenuCategory {
  title: string;
  subtitle?: string;
  description?: string;
  items: MenuItem[];
}

export default function Home() {
  const config = getContentConfig();
  const galleryImages = getGalleryImages();
  
  const sauceOptions = config.sauces.options;

  const menuData: MenuCategory[] = config.menuSections.map(category => ({
    title: category.title,
    subtitle: category.subtitle,
    description: category.description,
    items: category.items
  }));

  return (
    <>
      <Head>
        <title>{config.site.name} - Best Wings in Town</title>
        <meta name="description" content={config.site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <div className={styles.menuBackground}>
        {/* Home Section with Large Image */}
        <section className={styles.heroSection}>
          <div className={styles.heroImageFull}>
            <Image
              src="/photos/home/mosaic_home.png"
              alt="Mighty Wings Home Mosaic"
              layout="fill"
              className={styles.heroImageFullImg}
              priority
            />
            <div className={styles.heroOverlay}>
              <p className={styles.heroSubtitleLarge}>
                {config.home.subtitle}
              </p>
              <button 
                className={styles.menuButton}
                onClick={() => {
                    const menuSection = document.getElementById('menu');
                    if (menuSection) {
                      const navbar = document.getElementById('nav');
                      const navbarHeight = navbar ? navbar.offsetHeight : 80;
                      const elementPosition = menuSection.offsetTop - navbarHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                    >
                {config.home.buttonText}
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
                    <span className={styles.categorySubTitle}>
                      {parse(category.subtitle)}
                    </span>
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
                      <div className={styles.itemOptions}>
                        {Object.entries(item.options).map(([optionName, price], index) => (
                          <div key={optionName} className={styles.optionItem}>
                            {Object.keys(item.options).length > 1 && (
                              <div className={styles.optionHeader}>{optionName}</div>
                            )}
                            <div className={styles.optionPrice}>{price}</div>
                          </div>
                        ))}
                      </div>
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
                    <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>{config.sauces.title}</h3>
                      {config.sauces.subtitle && (
                        <span className={styles.categorySubTitle}>{config.sauces.subtitle}</span>
                      )}
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
                    <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>{config.hours.title}</h3>
                      <span className={styles.categorySubTitle}>{config.hours.subtitle}</span>
                  </div>
                  <div className={styles.hoursTable}>
                    {config.hours.schedule.map((schedule, index) => (
                      <div key={index} className={styles.hoursRow}>
                        <div className={styles.hoursDay}>{schedule.days}:</div>
                        <div className={styles.hoursTime}>{schedule.time}</div>
                      </div>
                    ))}
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
                <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>{config.contact.title}</h3>
              </div>

              <div className={styles.contactLayout}>
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Phone</div>
                  <div className={styles.contactValue}>
                    <a href={`tel:${config.contact.phone.replace(/[^\d]/g, '')}`} className={styles.contactLink}>{config.contact.phone}</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Address</div>
                  <div className={styles.contactValue}>
                    <a href="geo:28.303339,-81.349330?q=2330+Fortune+Road+Kissimee+FL+34744" className={styles.contactLink}>
                      {config.contact.address.line1}<br />
                      {config.contact.address.line2}
                    </a>
                  </div>
                </div>

                <div className={styles.mapCard}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.668869647912!2d-81.35231539999999!3d28.303339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.5!3m3!1m2!1s0x88dd85e2b9fbbaed%3A0xababad4cccf5878a!2eMighty%20Wings!5e0!3m2!1sen!2sus!4v1753660451685!5m2!1sen!2sus" 
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
                <h3 className={styles.categoryTitle} style={{ margin: 0, textAlign: 'left', borderBottom: 'none' }}>{config.gallery.title}</h3>
              </div>
              <div className={styles.galleryContainer}>
                {galleryImages.map((image, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={200}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
        </div>

      </div>
      </div>
      </section>

      </div>
      </Layout>
    </>
  );
}

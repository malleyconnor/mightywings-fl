import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';
import { getContentConfig } from '../utils/content';

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

export default function Menu() {
  const config = getContentConfig();
  const sauceOptions = config.sauces.options;

  const menuData: MenuCategory[] = config.menuSections.map(category => ({
    category: category.title,
    description: category.description,
    items: category.items.map(item => ({
      ...item,
      description: category.title.includes("Wings") && !category.title.includes("Family") ? 
        <>Tossed in your <a href="#flavors">choice of flavor</a></> : 
        (item.description || "")
    }))
  }));

  return (
    <>
      <Head>
        <title>Menu - Mighty Wings</title>
        <meta name="description" content="Explore our delicious menu of wings, sides, and drinks. Fresh ingredients, bold flavors, unbeatable prices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

        <div className={styles.sauceSection} id="flavors">
          <h2 className={styles.sauceTitle}>Choose Your Flavor</h2>
          <p className={styles.sauceDescription}>All wings and boneless wings come with your choice of these amazing flavors:</p>
          <p className={styles.sauceNote}><strong>*You can mix any combination of sauces</strong></p>
          <div className={styles.sauceOptionsGrid}>
            {sauceOptions.map((sauce, index) => (
              <div key={index} className={styles.sauceOption}>
                <span className={styles.itemName}>{sauce}</span>
              </div>
            ))}
          </div>
          <p className={styles.sauceNote}>*Extra charge for all FLATS or DRUMS</p>
        </div>

        <div className={styles.menu}>
          {menuData.map((category) => (
            <section key={category.category} className={styles.menuCategory}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              {category.description && (
                <p className={styles.categoryDescription}>{category.description}</p>
              )}
              <div className={styles.menuItems}>
                {category.items.map((item) => (
                  <div key={item.name} className={styles.menuItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className={styles.menuNote}>
          <p>
            <strong>Note:</strong> Prices subject to change. Please ask your server about daily specials and seasonal items.
          </p>
        </div>
      </Layout>
    </>
  );
}

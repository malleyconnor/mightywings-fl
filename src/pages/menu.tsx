import Head from 'next/head';
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

export default function Menu() {
  const sauceOptions = [
    "Mild", "Med", "Hot", "Mighty Hot", "Garlic", "Honey", "Teriyaki", 
    "Cajun", "Honey Mustard", "BBQ", "Lemon & Pepper", "Garlic Parmesan", 
    "Asian Sweet BBQ", "Spicy Sweet & Sour"
  ];

  const menuData: MenuCategory[] = [
    {
      category: "Wings",
      items: [
        { name: "6 Wings", description: <>Tossed in your <a href="#flavors">choice of flavor</a></>, price: "$6.00" },
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
        <title>Menu - Mighty Wings</title>
        <meta name="description" content="Explore our delicious menu of wings, sides, and drinks. Fresh ingredients, bold flavors, unbeatable prices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our Menu</h1>
          <p className={styles.pageSubtitle}>
            Classic Buffalo Style Wings & More
          </p>
        </div>

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

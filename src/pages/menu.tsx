import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

interface MenuItem {
  name: string;
  description: string;
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
        { name: "6 Wings", description: "Choose from our 14 signature flavors", price: "$6.00" },
        { name: "6 Wings & Fries", description: "Wings with a side of fries", price: "$7.75" },
        { name: "9 Wings", description: "Choose from our 14 signature flavors", price: "$9.00" },
        { name: "9 Wings & Fries", description: "Wings with a side of fries", price: "$10.75" },
        { name: "12 Wings", description: "Choose from our 14 signature flavors", price: "$12.00" },
        { name: "12 Wings & Fries", description: "Wings with a side of fries", price: "$13.75" },
        { name: "18 Wings", description: "Choose from our 14 signature flavors", price: "$18.00" },
        { name: "18 Wings & Fries", description: "Wings with a side of fries", price: "$19.75" },
        { name: "25 Wings", description: "Choose from our 14 signature flavors", price: "$25.00" },
        { name: "36 Wings", description: "Choose from our 14 signature flavors", price: "$36.00" },
        { name: "50 Wings", description: "Choose from our 14 signature flavors", price: "$50.00" },
      ]
    },
    {
      category: "Boneless Wings",
      items: [
        { name: "10 Boneless & Fries", description: "Boneless wings with fries in your favorite flavor", price: "$7.75" },
        { name: "15 Boneless & Fries", description: "Boneless wings with fries in your favorite flavor", price: "$10.75" },
        { name: "20 Boneless & Fries", description: "Boneless wings with fries in your favorite flavor", price: "$13.75" },
      ]
    },
    {
      category: "Chicken Tenders",
      items: [
        { name: "3 Tenders", description: "Crispy chicken tenders", price: "$6.00" },
        { name: "3 Tenders & Fries", description: "Tenders with a side of fries", price: "$7.75" },
        { name: "5 Tenders", description: "Crispy chicken tenders", price: "$9.75" },
        { name: "5 Tenders & Fries", description: "Tenders with a side of fries", price: "$11.50" },
        { name: "8 Tenders", description: "Crispy chicken tenders", price: "$15.00" },
        { name: "8 Tenders & Large Fries", description: "Tenders with large fries", price: "$18.75" },
      ]
    },
    {
      category: "Family Specials",
      description: "Each Family Special comes with Extra Large Fries & Liter Soda",
      items: [
        { name: "36 Wings Family Special", description: "36 wings, extra large fries & liter soda", price: "$45.75" },
        { name: "50 Wings Family Special", description: "50 wings, extra large fries & liter soda", price: "$59.75" },
        { name: "25 Boneless & 20 Wings", description: "Mix combo, extra large fries & liter soda", price: "$44.75" },
        { name: "35 Boneless & 30 Wings", description: "Large mix combo, extra large fries & liter soda", price: "$58.75" },
      ]
    },
    {
      category: "Side Orders",
      items: [
        { name: "Fried Cheese Sticks (5pcs)", description: "Golden fried mozzarella sticks", price: "$4.25" },
        { name: "Small Fries", description: "Crispy golden fries", price: "$2.00" },
        { name: "Small Fries with Cheese", description: "Fries topped with cheese sauce", price: "$3.00" },
        { name: "Large Fries", description: "Crispy golden fries", price: "$4.00" },
        { name: "Large Fries with Cheese", description: "Large fries topped with cheese sauce", price: "$5.75" },
        { name: "Extra Large Fries", description: "Perfect for sharing", price: "$7.95" },
        { name: "Small Onion Rings", description: "Beer-battered onion rings", price: "$3.00" },
        { name: "Large Onion Rings", description: "Beer-battered onion rings", price: "$5.95" },
        { name: "Egg Roll", description: "Crispy egg roll", price: "$1.25" },
        { name: "Celery & Dressing (Small)", description: "Fresh celery with your choice of dressing", price: "$2.00" },
        { name: "Celery & Dressing (Large)", description: "Fresh celery with your choice of dressing", price: "$4.00" },
      ]
    },
    {
      category: "Extras & Sauces",
      items: [
        { name: "All Flats or Drums (6-9 wings)", description: "Upgrade to all flats or all drums", price: "$0.50" },
        { name: "All Flats or Drums (12-18 wings)", description: "Upgrade to all flats or all drums", price: "$0.75 - $1.00" },
        { name: "All Flats or Drums (25-36 wings)", description: "Upgrade to all flats or all drums", price: "$1.50 - $2.00" },
        { name: "All Flats or Drums (50 wings)", description: "Upgrade to all flats or all drums", price: "$3.00" },
        { name: "Extra Sauce (Small)", description: "Ranch, blue cheese, wing sauce, or cheese sauce", price: "$0.50" },
        { name: "Extra Sauce (Large)", description: "Ranch, blue cheese, wing sauce, or cheese sauce", price: "$1.00" },
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

        <div className={styles.sauceSection}>
          <h2 className={styles.sauceTitle}>🌶️ Choose Your Flavor</h2>
          <p className={styles.sauceDescription}>All wings come with your choice of these amazing flavors:</p>
          <div className={styles.sauceGrid}>
            {sauceOptions.map((sauce, index) => (
              <span key={index} className={styles.sauceOption}>
                {sauce}
              </span>
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

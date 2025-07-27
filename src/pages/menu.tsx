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
  items: MenuItem[];
}

export default function Menu() {
  const menuData: MenuCategory[] = [
    {
      category: "Wings",
      items: [
        { name: "Buffalo Wings", description: "Classic buffalo sauce with celery and blue cheese", price: "$12.99" },
        { name: "BBQ Wings", description: "Sweet and tangy barbecue glazed wings", price: "$12.99" },
        { name: "Honey Garlic Wings", description: "Sweet honey with roasted garlic", price: "$13.99" },
        { name: "Spicy Nashville Wings", description: "Hot and crispy Nashville-style", price: "$14.99" },
        { name: "Lemon Pepper Wings", description: "Zesty lemon pepper seasoning", price: "$13.99" },
        { name: "Teriyaki Wings", description: "Sweet and savory teriyaki glaze", price: "$13.99" },
      ]
    },
    {
      category: "Sides",
      items: [
        { name: "Loaded Fries", description: "Fries topped with cheese, bacon, and green onions", price: "$8.99" },
        { name: "Onion Rings", description: "Beer-battered crispy onion rings", price: "$6.99" },
        { name: "Mac & Cheese", description: "Creamy three-cheese macaroni", price: "$7.99" },
        { name: "Coleslaw", description: "Fresh cabbage slaw with tangy dressing", price: "$4.99" },
        { name: "Mozzarella Sticks", description: "Golden fried mozzarella with marinara", price: "$7.99" },
      ]
    },
    {
      category: "Drinks",
      items: [
        { name: "Craft Beer", description: "Local brewery selection", price: "$5.99" },
        { name: "Soft Drinks", description: "Coke, Pepsi, Sprite, etc.", price: "$2.99" },
        { name: "Fresh Lemonade", description: "House-made fresh lemonade", price: "$3.99" },
        { name: "Iced Tea", description: "Sweet or unsweetened", price: "$2.99" },
        { name: "Coffee", description: "Fresh brewed coffee", price: "$2.49" },
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
            Discover our mouth-watering selection of wings, sides, and drinks
          </p>
        </div>

        <div className={styles.menu}>
          {menuData.map((category) => (
            <section key={category.category} className={styles.menuCategory}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
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

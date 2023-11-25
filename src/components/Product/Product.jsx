import styles from "./Product.module.scss";

const Product = () => {
  const products = [
    {
      imgPath: "/src/assets/greenLavash.png",
      title: "Combo 1",
      description: "Мясной лаваш, фри, кола разлив и кетчуп",
    },
    {
      imgPath: "/src/assets/yellowLavash.png",
      title: "Combo 1",
      description: "Мясной лаваш, фри, кола разлив и кетчуп",
    },
  ];
  return (
    <section className={styles.productSection}>
      <h3>Pizza</h3>
      <ul className={styles.products}>
        {products?.map((product) => (
          <li key={product?.imgPath} className={styles.product}>
            <img src={product?.imgPath} alt="product" />
            <div className={styles.productTexts}>
              <h4>{product?.title}</h4>
              <p>{product?.description}</p>
              <div className={styles.orderPart}>
                <p className={styles.price}>39 000 сум</p>
                <button>Add</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Product;

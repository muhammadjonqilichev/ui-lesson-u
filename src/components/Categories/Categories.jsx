import { useState } from "react";
import styles from "./Categories.module.scss";
const Categories = () => {
  const [state, setState] = useState([
    { name: "Pizza", cliked: true },
    { name: "Pastas", clicked: false },
    { name: "Snacks", clicked: false },
  ]);

  const handleCategoryClick = (index) => {
    const updatedCategories = state.map((category, i) => ({
      ...category,
      clicked: i === index,
    }));

    setState(updatedCategories);
  };

  return (
    <section>
      <div>
        <ul className={styles.categories}>
          {state?.map((product, i) => (
            <li
              className={
                product.clicked ? styles.categoryClicked : styles.category
              }
              onClick={() => handleCategoryClick(i)}
              key={i}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;

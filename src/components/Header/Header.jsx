import { navMenu } from "./headerDatas";
import styles from "./Header.module.scss";
import { CartIcon, LocationIcon, Logo, UserIcon } from "@/assets/icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.inner}>
          {navMenu?.map((menu, i) => (
            <li key={i}>{menu}</li>
          ))}
        </ul>
        <ul className={styles.inner}>
          <li className={styles.innerRight}>
            <div className={styles.locationIcon}>
              <LocationIcon />
            </div>
            <div className={styles.iconText}>
              <p>Заказ с собой</p>
              <p>Ташкент, Мирзо-Улугбекский район</p>
            </div>
          </li>
          <li className={styles.innerRight}>
            <div className={styles.cartIcon}>
              <CartIcon />
            </div>
            <p>12 000 сум</p>
          </li>
          <li className={styles.innerRight}>
            <div className={styles.userIcon}>
              <UserIcon />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

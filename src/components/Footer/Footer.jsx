import styles from "./Footer.module.scss";
import {
  Logo,
  TelegramIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/assets/icons.jsx";

const Footer = () => {
  return (
    <footer>
      <div className={styles.upperFooter}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.menu}>
          <ul className={styles.lists}>
            <li>Branches</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
        </nav>
      </div>
      <div className={styles.footer}>
        <h4>©Udevs 2020 - 2022 All rights reserved</h4>
        <ul className={styles.icons}>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TelegramIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

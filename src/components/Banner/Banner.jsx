import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <img
        className={styles.banner}
        src="/src/assets/banner.png"
        alt="banner"
      />
    </section>
  );
};

export default Banner;

//css
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <p className={styles.route}>/ Panel</p>
        <p className={styles.reroute}>Panel</p>
      </div>

      <div className={styles.options}>
        <p className={styles.userprofile}> </p>
        <p className={styles.configs}> </p>
      </div>
    </div>
  );
};

export default Navbar;

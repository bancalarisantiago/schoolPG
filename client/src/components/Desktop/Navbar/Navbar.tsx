//css
import styles from "./Navbar.module.css";

const Navbar: React.FC<{ location: String; validate: any }> = ({
  validate,
  location,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <p className={styles.route}>/ {location.substring(1)}</p>
        <p className={styles.reroute}>{location.substring(1)}</p>
      </div>

      <div className={styles.options}>
        {validate.user.picture ? (
          <img
            src={validate.user.picture}
            className={styles.pic}
            alt="profile"
          />
        ) : (
          <p className={styles.userprofile}> </p>
        )}

        <p className={styles.configs}> </p>
      </div>
    </div>
  );
};

export default Navbar;

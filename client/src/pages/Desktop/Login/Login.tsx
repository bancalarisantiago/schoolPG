//css
import styles from "./Login.module.css";

//components
import BgImage from "../../../components/Desktop/BgImage/BgIMage";
import FormLogin from "../../../components/Desktop/FormLogin/FormLogin";

//assets
import logo from "../../../assets/logo.png";

//from modules
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <div className={styles.imgBG}>
          <div className={styles.header}>
            {/* <img src={logo} alt="logo" className={styles.logo} /> */}
            <span className={styles.pgs}>PGSchool Application</span>
          </div>
          <BgImage />
        </div>
        <div className={styles.info}>
          <p className={styles.future}>El futuro de la educación llegó.</p>
          <p className={styles.change}>
            Sé parte del cambio y sumate a todo lo que tenemos para ofrecerte{" "}
          </p>
          <p className={styles.about}>
            Lee acerca de nuestra porpuesta{" "}
            <NavLink to="/aboutUs" className={styles.aboutUs}>
              aqui.
            </NavLink>
          </p>
        </div>
      </div>

      <div className={styles.form}>
        <FormLogin />
      </div>
    </div>
  );
}

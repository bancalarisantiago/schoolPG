//css
import styles from "./FormLogin.module.css";
//modules

//assets
import logo from "../../../assets/logo.png";
import logoSpie from "../../../assets/logo-sin-pie.png";

export default function FormLogin(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <p className={styles.welcome}>
          Bienvenido a<p className={styles.pgname}>PGSchool</p>
        </p>
        <form>
          <input
            name="correo"
            placeholder="Correo Electronico"
            autoComplete="off"
            className={styles.modernInput}
          />
          <input
            name="contraseña"
            type="password"
            placeholder="Contraseña"
            autoComplete="off"
            className={styles.modernInput}
          />
          <div className={styles.termsandconditions}>
            <p className={styles.terms}>
              ingresando a la app aceptas los
              <span className={styles.legal}> terminos y condiciones</span> y
              <span className={styles.legal}> las politicas de privacidad</span>
            </p>
          </div>
          <div className={styles.componentBut}>
            <button className={styles.logbut}>login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

//css
import styles from "./FormLogin.module.css";
//modules

//components
import Input from "../ReusableComponents/Input/Input";
import Button from "../ReusableComponents/Button/Button";

export default function FormLogin(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <p className={styles.welcome}>
          Bienvenido a<p className={styles.pgname}>PGSchool</p>
        </p>
        <form>
          <Input placeHolder={"Correo Electronico"} name={"correo"} />
          <Input
            placeHolder={"Contraseña"}
            name={"contraseña"}
            type={"password"}
          />
          <div className={styles.termsandconditions}>
            <p className={styles.terms}>
              ingresando a la app aceptas los
              <span className={styles.legal}> terminos y condiciones</span> y
              <span className={styles.legal}> las politicas de privacidad</span>
            </p>
          </div>
          <Button content={"login"} />
        </form>
      </div>
    </div>
  );
}

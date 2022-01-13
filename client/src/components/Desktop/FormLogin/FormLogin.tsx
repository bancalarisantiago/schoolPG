//components
import Input from "../ReusableComponents/Input/Input";
import Button from "../ReusableComponents/Button/Button";
//css
import styles from "./FormLogin.module.css";
//helper
import useHelper from "./useHelper";

export default function FormLogin(): JSX.Element {
  const { userState, credential, handleChange, handleSubmit } = useHelper();

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <p className={styles.welcome}>
          Bienvenido a<span className={styles.pgname}>PGSchool</span>
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            placeHolder={"Correo Electronico"}
            name={"email"}
            {...{ handleChange, credential }}
          />
          <Input
            placeHolder={"Contraseña"}
            name={"password"}
            type={"password"}
            {...{ handleChange, credential }}
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

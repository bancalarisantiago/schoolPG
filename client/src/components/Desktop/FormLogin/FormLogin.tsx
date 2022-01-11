//components
import Input from "../ReusableComponents/Input/Input";
import Button from "../ReusableComponents/Button/Button";
//css
import styles from "./FormLogin.module.css";
//modules
import React, { useState } from "react";

//test
import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "localhost:5000/api",
});

//types
type SubmitEvent = React.SyntheticEvent;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface ICredential {
  email: string;
  password: string;
}

export default function FormLogin(): JSX.Element {
  const [credential, setcredential] = useState<ICredential>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.currentTarget;
    setcredential({
      ...credential,
      [name]: value,
    });
  };

  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    const user = instance.post("/signin", credential, {
      withCredentials: true,
    });
    console.log(user);
  };

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <p className={styles.welcome}>
          Bienvenido a<span className={styles.pgname}>PGSchool</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="correo"
            autoComplete="off"
            type="text"
            onChange={handleChange}
            value={credential.email}
          />
          <input
            name="password"
            placeholder="contraseña"
            autoComplete="off"
            type="password"
            onChange={handleChange}
            value={credential.password}
          />
          {/* <Input
            placeHolder={"Correo Electronico"}
            name={"email"}
            {...{ handleChange, credential }}
          />
          <Input
            placeHolder={"Contraseña"}
            name={"password"}
            type={"password"}
          /> */}
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

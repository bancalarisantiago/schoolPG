//css
import { useState } from "react";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import { IState } from "../../../interfaces";
import styles from "./UpdateStudent.module.css";
import useHelper from "./useHelper";

interface IUTeacherInputs {
  name: string;
  lastName: string;
  userName: string;
  password: string;
  document: string;
  email: string;
  number: string;
  streetName: string;
  locality: string;
  postalCode: string;
  gender: string;
  birthdate: string;
  cellphone: string;
  picture: string;
}
const UpdateStudent: React.FC = () => {
  const {} = useHelper();
  const [input, setInput] = useState<IUTeacherInputs>({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    document: "",
    email: "",
    number: "",
    streetName: "",
    locality: "",
    postalCode: "",
    gender: "",
    birthdate: "",
    cellphone: "",
    picture: "",
  });
  const [error, setError] = useState<IUTeacherInputs>({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    document: "",
    email: "",
    number: "",
    streetName: "",
    locality: "",
    postalCode: "",
    gender: "",
    birthdate: "",
    cellphone: "",
    picture: "",
  });
  const validate = (name: string) => {
    switch (name) {
      case "name": {
        let name = "";
        if (!input.name) name = "Nombre es requerido.";
        else if (input.name.length < 3)
          name = "Nombre debe tener mas de 2 caracteres";
        // return { ...errors, name };
      }
      default:
        break;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Actualizar Estudiante</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.formCard}>
            <form>
              <div className={styles.inputs}>
                <Input text="Nombre" name="name" />
                <Input text="Apellido" name="lastName" />
                <Input text="Nombre de Usuario" name="userName" />
                <Input text="Contraseña" name="password" />
                <Input text="DNI" type="number" name="document" />
                <Input text="e-mail" name="email" />
                <Input text="Calle" name="streetName" />
                <Input text="Numero" type="number" name="number" />
                <Input text="Localidad" name="locality" />
                <Input text="Codigo Postal" name="postalCode" />
                <Input text="Genero" name="gender" />
                <Input text="Cumpleaños" type="date" name="birthdate" />
                <Input text="Celular" name="cellphone" />
                <Input text="Foto" name="picture" />
              </div>

              <Button text="Actualizar Informacion" />
            </form>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.inputs}>
              <Input text="Nombre" name="name" value="Castro" disabled={true} />
              <Input
                text="Apellido"
                name="lastName"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Nombre de Usuario"
                name="userName"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Contraseña"
                name="password"
                value="Castro"
                disabled={true}
              />
              <Input
                text="DNI"
                type="number"
                name="document"
                value="Castro"
                disabled={true}
              />
              <Input
                text="e-mail"
                name="email"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Calle"
                name="streetName"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Numero"
                type="number"
                name="number"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Localidad"
                name="locality"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Codigo Postal"
                name="postalCode"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Genero"
                name="gender"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Cumpleaños"
                type="date"
                name="birthdate"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Celular"
                name="cellphone"
                value="Castro"
                disabled={true}
              />
              <Input
                text="Foto"
                name="picture"
                value="Castro"
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;

//css
import { useMemo, useState } from "react";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./UpdateStudent.module.css";
import useHelper from "./useHelper";

const UpdateStudent: React.FC = () => {
  const { inputFieldValues, handleChange, disabled, errors } = useHelper();

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
                {inputFieldValues.map((e, ind) => {
                  return (
                    <div>
                      <Input
                        type={e.type ? e.type : ""}
                        text={e.text}
                        name={e.name}
                        onChange={handleChange}
                      />
                      {errors[e.name] && (
                        <p className={styles.errorsP}>{errors[e.name]}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <Button text="Actualizar Informacion" disabled={disabled} />
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
                value="123"
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
                // type="number"
                name="streetNumber"
                value="123"
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
                // type="date"
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

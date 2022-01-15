import Button from "../ReusableComponents/Button/Button";
import Input from "../ReusableComponents/Input/Input";
import styles from "./AddStudent.module.css";

const AddStudent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Añadir Alumno</p>
        </div>

        <form className={styles.inputs}>
          <Input name="Nombre" />
          <Input name="Apellido" />
          <Input name="DNI" />
          <Input name="Nombre de Usuario" />
          <Input name="Contraseña" />
          <Input name="e-mail" />
          <Button text="Añadir Alumno" />
        </form>
      </div>
    </div>
  );
};

export default AddStudent;

import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./AddStudent.module.css";

const AddStudent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Añadir Alumno</p>
        </div>

        <form className={styles.inputs}>
          <Input text="Nombre" />
          <Input text="Apellido" />
          <Input text="DNI" />
          <Input text="Nombre de Usuario" />
          <Input text="Contraseña" />
          <Input text="e-mail" />
          <Button text="Añadir Alumno" />
        </form>
      </div>
    </div>
  );
};

export default AddStudent;

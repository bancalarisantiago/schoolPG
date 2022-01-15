import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./AddStudent.module.css";

const AddStudent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Añadir Alumno</h1>
      {/* <Input name="Nombre" /> */}
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
  );
};

export default AddStudent;

//css
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./UpdateStudent.module.css";

const UpdateStudent: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Actualizar Estudiante</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <form className={styles.inputs}>
            <Input name="Nombre" />
            <Input name="Apellido" />
            <Input name="DNI" />
            <Input name="Nombre de Usuario" />
            <Input name="Contraseña" />
            <Input name="e-mail" />
            <Button text="Actualizar Informacion" />
          </form>
        </div>
        <div className={styles.card}>
          <div className={styles.inputs}>
            <Input name="Nombre" value="Castro" disabled={true} />
            <Input name="Apellido" value="Castro" disabled={true} />
            <Input name="DNI" value="Castro" disabled={true} />
            <Input name="Nombre de Usuario" value="Castro" disabled={true} />
            <Input name="Contraseña" value="Castro" disabled={true} />
            <Input name="e-mail" value="Castro" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;

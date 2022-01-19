import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./AddAdmin.module.css";

import useHelper from "./useHelper"

const AddAdmin: React.FC = () => {

  const { handleInputChange ,handleNameChange, handleSubmit,  input, name } = useHelper();

  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Añadir Admin</p>
        </div>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <Input 
            name="first"
            autoComplete="off"
            placeholder="Nombre"
            value={name.first}
            onChange={handleNameChange}
          />
          <Input 
            name="last"
            autoComplete="off"
            placeholder="Apellido"
            value={name.last}
            onChange={handleNameChange}
          />
          <Input 
            name="document"
            autoComplete="off"
            placeholder="Documento"
            value={input.document}
            onChange={handleInputChange}
          />
          <Input 
            name="username"
            autoComplete="off"
            placeholder="Usuario"
            value={input.username}
            onChange={handleInputChange}
          />
          <Input 
            name="password"
            autoComplete="off"
            placeholder="Contraseña"
            value={input.document}
            onChange={handleInputChange} />
          <Input 
            name="email"
            autoComplete="off"
            placeholder="E-mail"
            value={input.email}
            onChange={handleInputChange}  
            />
          <div className={styles.box1}>
            <Button text="Añadir Admin" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
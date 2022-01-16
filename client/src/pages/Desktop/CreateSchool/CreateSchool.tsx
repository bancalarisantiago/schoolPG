//components
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";

import useHelper from "./useHelper";
import styles from "./CreateSchool.module.css";

const CreateSchool: React.FC = () => {
  const { handleChange, handleInputChange, handleSubmit, input, location } =
    useHelper();

  return (
    <div className={styles.main}>
      <div className={styles.formDiv}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.formHtml}>
            <div className={styles.header}>
              <p className={styles.welcome}>Bienvenido a SchoolPg</p>
            </div>
            <div className={styles.inputsDiv}>
              <div className={styles.inputC}>
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Nombre"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Numeracion"
                  name="number"
                  value={location.number}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputC}>
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Calle"
                  name="streetName"
                  value={location.streetName}
                  onChange={handleChange}
                />

                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Codigo Postal"
                  name="postalCode"
                  value={location.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputC}>
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Localidad"
                  name="locality"
                  value={location.locality}
                  onChange={handleChange}
                />
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Correo Electronico"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.inputC}>
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Numero Fijo de Contacto"
                  name="phone"
                  value={input.phone}
                  onChange={handleInputChange}
                />

                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  placeholder="Numero Celular"
                  name="cellphone"
                  value={input.cellphone}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputC}>
                <input
                  className={styles.inputTag}
                  autoComplete="off"
                  type="text"
                  placeholder="Logo"
                  name="logo"
                  value={input.logo}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.textareaC}>
                <textarea
                  className={styles.textareaTag}
                  placeholder="Orientacion"
                  name="orientation"
                  value={input.orientation}
                  onChange={handleInputChange}
                />

                <textarea
                  className={styles.textareaTag}
                  placeholder="Descripcion"
                  name="description"
                  value={input.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.butDiv}>
                <Button text={"CreateSchool"} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.previewDiv}>
        <div className={styles.preview}></div>
      </div>
    </div>
  );
};

export default CreateSchool;

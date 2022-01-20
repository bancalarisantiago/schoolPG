//components
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";

//helper
import useHelper from "./useHelper";
//css
import styles from "./CreateSchool.module.css";
//assets
import Logo from "../../../assets/logo.png";

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
                  name="streetNumber"
                  value={location.streetNumber}
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
                <Button text={"Crear Escuela"} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.previewDiv}>
        <div className={styles.preview}>
          <div className={styles.top}>
            <div className={styles.imgDiv}>
              <img
                src={input.logo.length ? input.logo : Logo}
                alt="logo"
                className={styles.logo}
              />
            </div>
            <p className={styles.name}>
              {input.name.length ? input.name : "Nombre de la institucion"}
            </p>
          </div>
          <ul className={styles.info}>
            <div className={styles.left}>
              <p className={styles.section}>informacion de contacto</p>
              <li className={styles.liTag}>
                <span className={styles.default}>Telefono Celular: </span>
                {input.cellphone.length ? input.cellphone : "Numero Celular"}
              </li>
              <li className={styles.liTag}>
                <span className={styles.default}>Telefono Fijo: </span>
                {input.phone.length ? input.phone : "Numero Fijo"}
              </li>
              <li className={styles.liTag}>
                <span className={styles.default}>Correo Electronico: </span>
                {input.email.length ? input.email : "Correo de contacto"}
              </li>
            </div>
            <div className={styles.right}>
              <p className={styles.section}>informacion general</p>
              <li className={styles.liTag}>
                <span className={styles.default}>Localidad: </span>
                {location.locality.length ? location.locality : "Ciudad"} /{" "}
                {location.postalCode.length
                  ? location.postalCode
                  : "Codigo Postal"}
              </li>
              <li className={styles.liTag}>
                <span className={styles.default}>Direccion: </span>
                {location.streetName.length
                  ? location.streetName
                  : "Calle"}{" "}
                {location.streetNumber.length
                  ? location.streetNumber
                  : "Numeracion"}
              </li>
            </div>
          </ul>
          <div className={styles.bottom}>
            <p className={styles.pTag}>
              <span className={styles.default}>Orientacion: </span>
              {input.orientation.length
                ? input.orientation
                : "Orientacion"}{" "}
            </p>
            <p className={styles.pTag}>
              <span className={styles.default}>Descripcion: </span>
              {input.description.length
                ? input.description
                : "Descripcion"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSchool;

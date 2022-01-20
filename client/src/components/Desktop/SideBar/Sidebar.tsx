//css
import styles from "./Sidebar.module.css";
import "../../../styles/theme.css";
//helper
import useHelper from "./useHelper";

//assets
import down from "../../../assets/down.png";
import { NavLink } from "react-router-dom";

//components
import Spinner from "../Spinner/Spinner";

const Sidebar: React.FC = () => {
  const {
    show,
    underline,
    school,
    ctime,
    handleUnderline,
    handleClick,
    logOut,
  } = useHelper();
  var d = new Date().toLocaleDateString();
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Panel de Administracion</h2>
      <div className={styles.datehour}>
        <span className={styles.date}>{d}</span>
        <span className={styles.hour}>{ctime}</span>
      </div>

      <div className={styles.logoDiv}>
        {school ? (
          !school.logo ? (
            <Spinner />
          ) : (
            <img src={school.logo} alt="logo" className={styles.logo} />
          )
        ) : (
          <Spinner />
        )}
      </div>
      {school ? (
        <p className={styles.schoolname}>{school.name}</p>
      ) : (
        <p className={styles.schoolname}>Nombre De La Institucion</p>
      )}

      <ul>
        <NavLink to="general">
          <li
            className={show[6] ? styles.selected : styles.management}
            value="6"
            onClick={handleClick}
          >
            panel general
          </li>
        </NavLink>
        <li
          className={show[0] ? styles.selected : styles.management}
          value="0"
          onClick={handleClick}
        >
          alumnos
          <img
            className={show[0] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[0] ? styles.dropdownShow : styles.dropdownHide}>
          <NavLink to="agregar-alumno">
            <li
              className={underline[0] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="0"
            >
              agregar alumno
            </li>
          </NavLink>

          <NavLink to="modificar-alumno">
            <li
              className={underline[1] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="1"
            >
              modificar alumno
            </li>
          </NavLink>
        </ul>
        <li
          className={show[1] ? styles.selected : styles.management}
          value="1"
          onClick={handleClick}
        >
          profesores
          <img
            className={show[1] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[1] ? styles.dropdownShow : styles.dropdownHide}>
          <NavLink to="agregar-profesor">
            <li
              className={underline[2] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="2"
            >
              agregar profesor
            </li>
          </NavLink>
          <NavLink to="modificar-profesor">
            <li
              className={underline[3] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="3"
            >
              modificar profesor
            </li>
          </NavLink>
        </ul>
        <li
          className={show[2] ? styles.selected : styles.management}
          value="2"
          onClick={handleClick}
        >
          administradores
          <img
            className={show[2] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[2] ? styles.dropdownShow : styles.dropdownHide}>
          <NavLink to="agregar-admin">
            <li
              className={underline[4] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="4"
            >
              agregar admin
            </li>
          </NavLink>
          <NavLink to="modificar-admin">
            <li
              className={underline[5] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="5"
            >
              modificar admin
            </li>
          </NavLink>
        </ul>
        <li
          className={show[3] ? styles.selected : styles.management}
          value="3"
          onClick={handleClick}
        >
          cursos
          <img
            className={show[3] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[3] ? styles.dropdownShow : styles.dropdownHide}>
          <NavLink to="agregar-curso">
            <li
              className={underline[6] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="6"
            >
              agregar curso
            </li>
          </NavLink>
          <NavLink to="modificar-curso">
            <li
              className={underline[7] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="7"
            >
              modificar curso
            </li>
          </NavLink>
        </ul>
        <li
          className={show[4] ? styles.selected : styles.management}
          value="4"
          onClick={handleClick}
        >
          materias
          <img
            className={show[4] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[4] ? styles.dropdownShow : styles.dropdownHide}>
          <NavLink to="agregar-materias">
            <li
              className={underline[8] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="8"
            >
              agregar materias
            </li>
          </NavLink>
          <NavLink to="modificar-materias">
            <li
              className={underline[9] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="9"
            >
              modificar materias
            </li>
          </NavLink>
        </ul>
        <li
          className={show[5] ? styles.selected : styles.management}
          value="5"
          onClick={handleClick}
        >
          calendario
          <img
            className={show[5] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[5] ? styles.dropdownShow : styles.dropdownHide}>
          <NavLink to="agregar-evento">
            <li
              className={underline[10] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="10"
            >
              agregar evento
            </li>
          </NavLink>
          <NavLink to="modificar-calendario">
            <li
              className={underline[11] ? styles.optionselected : styles.option}
              onClick={handleUnderline}
              value="11"
            >
              modificar calendario
            </li>
          </NavLink>
        </ul>
        <li className={styles.management} onClick={logOut}>
          Cerrar Sesión
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

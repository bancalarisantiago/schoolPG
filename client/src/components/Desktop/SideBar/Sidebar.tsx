//css
import styles from "./Sidebar.module.css";
import "../../../styles/theme.css";
//helper
import useHelper from "./useHelper";

//assets
import down from "../../../assets/down.png";

const Sidebar: React.FC = () => {
  const { show, underline, handleUnderline, handleClick } = useHelper();

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Panel de Administracion</h2>
      <ul>
        <li
          className={show[6] ? styles.selected : styles.management}
          value="6"
          onClick={handleClick}
        >
          panel general
        </li>
        <li
          className={show[0] ? styles.selected : styles.management}
          value="0"
          onClick={handleClick}
        >
          gestion de alumnos
          <img
            className={show[0] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[0] ? styles.dropdownShow : styles.dropdownHide}>
          <li
            className={underline[0] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="0"
          >
            añadir alumno
          </li>
          <li
            className={underline[1] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="1"
          >
            modificar alumno
          </li>
        </ul>
        <li
          className={show[1] ? styles.selected : styles.management}
          value="1"
          onClick={handleClick}
        >
          gestion de profesores
          <img
            className={show[1] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[1] ? styles.dropdownShow : styles.dropdownHide}>
          <li
            className={underline[2] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="2"
          >
            añadir profesor
          </li>
          <li
            className={underline[3] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="3"
          >
            modificar profesor
          </li>
        </ul>
        <li
          className={show[2] ? styles.selected : styles.management}
          value="2"
          onClick={handleClick}
        >
          gestion de admin
          <img
            className={show[2] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[2] ? styles.dropdownShow : styles.dropdownHide}>
          <li
            className={underline[4] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="4"
          >
            añadir admin
          </li>
          <li
            className={underline[5] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="5"
          >
            modificar admin
          </li>
        </ul>
        <li
          className={show[3] ? styles.selected : styles.management}
          value="3"
          onClick={handleClick}
        >
          gestion de curso
          <img
            className={show[3] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[3] ? styles.dropdownShow : styles.dropdownHide}>
          <li
            className={underline[6] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="6"
          >
            añadir curso
          </li>
          <li
            className={underline[7] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="7"
          >
            modificar curso
          </li>
        </ul>
        <li
          className={show[4] ? styles.selected : styles.management}
          value="4"
          onClick={handleClick}
        >
          gestion de materias
          <img
            className={show[4] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[4] ? styles.dropdownShow : styles.dropdownHide}>
          <li
            className={underline[8] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="8"
          >
            añadir materias
          </li>
          <li
            className={underline[9] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="9"
          >
            modificar materias
          </li>
        </ul>
        <li
          className={show[5] ? styles.selected : styles.management}
          value="5"
          onClick={handleClick}
        >
          gestion de calendario
          <img
            className={show[5] ? styles.less : styles.more}
            src={down}
            alt="down"
          />
        </li>
        <ul className={show[5] ? styles.dropdownShow : styles.dropdownHide}>
          <li
            className={underline[10] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="10"
          >
            añadir evento
          </li>
          <li
            className={underline[11] ? styles.optionselected : styles.option}
            onClick={handleUnderline}
            value="11"
          >
            modificar calendario
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;

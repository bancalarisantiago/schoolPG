//css
import styles from "./Database.module.css";
//from modules
import { NavLink } from "react-router-dom";
//helper
import useHelper from "./useHelper";
//assets
import userDefault from "../../../assets/user.png";
import info from "../../../assets/info.png";
import edit from "../../../assets/edit.png";
import trash from "../../../assets/delete.png";

const Database: React.FC<{
  school: any;
  userType: string;
  schoolType: string;
}> = ({ school, userType, schoolType }) => {
  const { user, matchUsers, handleChange } = useHelper(schoolType);
  return (
    <div className={styles.database}>
      <div className={styles.header}>
        <p className={styles.title}>Base de datos de {userType}</p>
        <input
          className={styles.search}
          placeholder="Busqueda..."
          onChange={handleChange}
        />
      </div>
      <div className={styles.tables}>
        <div className={styles.information}>
          <p className={styles.pname}>nombre</p>
          <p className={styles.pemail}>correo electronico</p>
          <p className={styles.ptel}>telefono</p>
          <p className={styles.ptel}>acciones</p>
        </div>
        {!user.length ? (
          school[schoolType].map((m: any, i: number) => (
            <div key={i} className={styles.user}>
              <div className={styles.namepic}>
                <img
                  src={m.picture ? m.picture : userDefault}
                  alt="profilepic"
                  className={styles.profilepic}
                />
                <NavLink
                  to={`/panel/detalle-usuario/${m._id}`}
                  className={styles.navLink}
                >
                  <span className={styles.name}>
                    {m.name.first} {m.name.last}
                  </span>
                </NavLink>
              </div>

              <p className={styles.email}>{m.email}</p>
              <p className={styles.cellphone}>{m.cellphone}</p>
              <div>
                <img src={edit} alt="editInfo" className={styles.userInfo} />
                <NavLink to={`/panel/detalle-usuario/${m._id}`}>
                  <img src={info} alt="userInfo" className={styles.userInfo} />
                </NavLink>

                <img src={trash} alt="trashUser" className={styles.userInfo} />
              </div>
            </div>
          ))
        ) : (
          <div>
            {matchUsers.length ? (
              matchUsers.map((m: any, i: number) => (
                <div key={i} className={styles.user}>
                  <div className={styles.namepic}>
                    <img
                      src={m.picture ? m.picture : userDefault}
                      alt="profilepic"
                      className={styles.profilepic}
                    />
                    <span className={styles.name}>
                      {m.name.first} {m.name.last}
                    </span>
                  </div>

                  <p className={styles.email}>{m.email}</p>
                  <p className={styles.cellphone}>{m.cellphone}</p>
                </div>
              ))
            ) : (
              <div className={styles.empty}>
                <div className={styles.message}>
                  <p className={styles.ptitle}>
                    No hubo coincidencia de {userType}.
                  </p>
                  <p className={styles.help}>
                    Pruebe los siguientes pasos en caso de considerar que es un
                    error:
                  </p>
                  <ol className={styles.steps}>
                    <li className={styles.step}>
                      Compruebe los datos del {userType}
                    </li>
                    <li className={styles.step}>
                      Corrobore que el {userType} se encuentra añadido al
                      sistema
                    </li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Database;

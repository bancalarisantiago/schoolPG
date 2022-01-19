//css
import styles from "./Database.module.css";
//helper
import useHelper from "./useHelper";
//assets
import userDefault from "../../../assets/user.png";
import info from "../../../assets/info.png";

const Database: React.FC<{
  school: any;
  userType: string;
  schoolType: string;
  updateUser?: any;
}> = ({ school, userType, schoolType, updateUser }) => {
  const { user, matchUsers, show, handleChange, handleShow } =
    useHelper(schoolType);
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
        </div>
        {!user.length ? (
          school[schoolType].map((m: any, i: number) => (
            <div key={i} className={styles.user} onClick={() => updateUser(m)}>
              <div className={styles.namepic}>
                <img
                  src={m.picture ? m.picture : userDefault}
                  alt="profilepic"
                  className={styles.profilepic}
                />
                <span className={styles.name} onClick={handleShow}>
                  {m.name.first} {m.name.last}
                  <img src={info} alt="userInfo" className={styles.userInfo} />
                </span>
              </div>

              <p className={styles.email}>{m.email}</p>
              <p className={styles.cellphone}>{m.cellphone}</p>
              {/* <img src={edit} alt="edit" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
                className={"feather feather-edit"}
              >
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
              </svg>
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

import styles from "./Database.module.css";

const Database: React.FC<{
  school: any;
  userType: string;
  schoolType: string;
}> = ({ school, userType, schoolType }) => {
  return (
    <div className={styles.database}>
      <div className={styles.header}>
        <p className={styles.title}>Base de datos de {userType}</p>
        <input className={styles.search} placeholder="Busqueda..." />
      </div>
      <div className={styles.tables}>
        <div className={styles.information}>
          <p className={styles.pname}>nombre</p>
          <p className={styles.pemail}>correo electronico</p>
          <p className={styles.ptel}>telefono</p>
        </div>
        {school[schoolType].map((m: any, i: number) => (
          <div key={i} className={styles.user}>
            <div className={styles.namepic}>
              <img
                src={m.picture}
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
        ))}
      </div>
    </div>
  );
};

export default Database;

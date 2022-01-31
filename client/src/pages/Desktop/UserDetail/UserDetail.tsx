//css
import styles from "./UserDetail.module.css";
//helper
import useHelper from "./useHelper";
import Loading from "../../../components/Desktop/ReusableComponents/Loading/Loading";
//assets
import defaultPic from "../../../assets/user.png";

const UserDetail: React.FC = () => {
  const { userDetail, userTypeEs } = useHelper();
  console.log(userDetail.user);
  return (
    <div className={styles.main}>
      {userDetail.name ? (
        <>
          <div className={styles.left}>
            <div className={styles.divImg}>
              <img
                src={userDetail.picture ? userDetail.picture : defaultPic}
                alt="profilePic"
                className={styles.profilePic}
              />
            </div>
            <div className={styles.person}>
              <p className={styles.name}>
                {userDetail.name.first} {userDetail.name.last}
              </p>
              <p className={styles.userType}>
                {userTypeEs(userDetail.userType)}
              </p>
            </div>

            <div className={styles.infoPerson}>
              <p className={styles.field}>
                Correo Electronico: {userDetail.email}
              </p>
              <p className={styles.field}>
                Nombre de Usuario: {userDetail.username}
              </p>
              <p className={styles.field}>DNI: {userDetail.document}</p>
              <p className={styles.field}>
                Numero de contacto:{" "}
                {!userDetail.phone && !userDetail.cellphone
                  ? "N/N"
                  : userDetail.phone
                  ? userDetail.cellphone / userDetail.phone
                  : userDetail.cellphone}
              </p>
              <p className={styles.field}>
                Genero: {userDetail.gender ? userDetail.gender : "N/N"}
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.courses}>
                <p className={styles.division}>Curso/s</p>
                <ul className={styles.list}>
                  {userDetail.course.length ? (
                    userDetail.course.map((m: any, i: number) => {
                      return (
                        <li className={styles.liTag} key={i}>
                          {m.name}
                        </li>
                      );
                    })
                  ) : (
                    <li className={styles.liTagError}>
                      No se ha registrado en ningun curso
                    </li>
                  )}
                </ul>
              </div>
              <div className={styles.subjects}>
                <p className={styles.division}>Materias</p>
                {userDetail.subject.length ? (
                  userDetail.subject.map((m: any, i: number) => {
                    return (
                      <ul className={styles.list} key={i}>
                        <li className={styles.liTag}>{m.name}</li>
                      </ul>
                    );
                  })
                ) : (
                  <ul className={styles.list}>
                    <li className={styles.liTagError}>
                      No se ha registrado en ninguna materia
                    </li>
                  </ul>
                )}
              </div>
              <p></p>
            </div>
            <div className={styles.bottom}>
              {userDetail.tutors.length ? (
                <>
                  <p className={styles.division}>Tutores</p>

                  {userDetail.tutors.map((m: any, i: number) => {
                    return (
                      <ul key={i} className={styles.tutorList}>
                        <li className={styles.firstTutorInfo}>{m.name}</li>
                        <li className={styles.tutorInfo}>{m.email}</li>
                        <li className={styles.tutorInfo}>{m.cellphone}</li>
                      </ul>
                    );
                  })}
                </>
              ) : (
                <>
                  <p className={styles.division}>Informacion Escolar</p>
                  <ul className={styles.list2}>
                    <li className={styles.firstTutorInfo}>
                      Nombre: {userDetail.school.name}
                    </li>
                    <li className={styles.firstTutorInfo}>
                      Contacto: {userDetail.school.cellphone}
                    </li>
                    <li className={styles.firstTutorInfo}>
                      Correo Electronico: {userDetail.school.email}
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserDetail;

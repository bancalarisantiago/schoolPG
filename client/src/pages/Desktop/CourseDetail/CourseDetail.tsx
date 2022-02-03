//css
import styles from "./CourseDetail.module.css";
//from modules
import { NavLink } from "react-router-dom";
//helper
import useHelper from "./useHelper";
//assets
import userDefault from "../../../assets/user.png";
import info from "../../../assets/info.png";
import edit from "../../../assets/edit.png";
import trash from "../../../assets/delete.png";
import goBack from "../../../assets/back-button.png";
import subject from "../../../assets/bookmark.png";
import Loading from "../../../components/Desktop/ReusableComponents/Loading/Loading";

const CourseDetail: React.FC = () => {
  const { course, navigate, confirmDelete, deleteSubject } = useHelper();

  function mapeo(usertype: string) {
    if (course && (usertype === "teachers" || usertype === "students")) {
      return course[usertype]?.map((m: any, i: number) => (
        <div key={i} className={styles.user}>
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
          <div className={styles.actions}>
            <NavLink
              to={`/panel/modificar-${
                usertype === "teachers" ? "profesor" : "alumno"
              }/${m._id}`}
            >
              <img src={edit} alt="editInfo" className={styles.userInfo} />
            </NavLink>
            <NavLink to={`/panel/detalle-usuario/${m._id}`}>
              <img src={info} alt="courseInfo" className={styles.userInfo} />
            </NavLink>
            <img
              src={trash}
              alt="trash-user"
              className={styles.userInfo}
              onClick={() => confirmDelete(m._id, m.name.first, m.name.last)}
            />
          </div>
        </div>
      ));
    }
  }

  return (
    <div className={styles.main}>
      {course ? (
        <>
          <div className={styles.header}>
            <p className={styles.title}>
              {course?.name} - Turno: {course?.shifts}
            </p>
            <button className={styles.goBack} onClick={() => navigate(-1)}>
              <img src={goBack} alt="goBack" className={styles.backImg} />
            </button>
          </div>
          <div className={styles.teachers}>
            <p className={styles.userType}>Profesores:</p>
            {mapeo("teachers")?.length
              ? mapeo("teachers")
              : "No se registraron profesores en este curso"}
          </div>
          <div className={styles.students}>
            <p className={styles.userType}>Estudiantes:</p>
            {mapeo("students")?.length
              ? mapeo("students")
              : "No se registraron Alumnos en este curso"}
          </div>
          <div className={styles.subjects}>
            <p className={styles.userType}>Materias:</p>
            {course?.subjects.length
              ? course?.subjects.map((m: any, i: number) => (
                  <div key={i} className={styles.subject}>
                    <img
                      src={subject}
                      alt="profilepic"
                      className={styles.bookmark}
                    />
                    <NavLink
                      to={`/panel/detalle-materia/${m._id}`}
                      className={styles.navLink}
                    >
                      <span className={styles.name}>{m.name}</span>
                    </NavLink>
                    <div className={styles.actions}>
                      <NavLink to={`/panel/modificar-materia/${m._id}`}>
                        <img
                          src={edit}
                          alt="editInfo"
                          className={styles.subjectInfo}
                        />
                      </NavLink>
                      <NavLink to={`/panel/detalle-materia/${m._id}`}>
                        <img
                          src={info}
                          alt="subjectInfo"
                          className={styles.subjectInfo}
                        />
                      </NavLink>
                      <img
                        src={trash}
                        alt="trash-subject"
                        className={styles.subjectInfo}
                        onClick={() => deleteSubject(m._id, m.name)}
                      />
                    </div>
                  </div>
                ))
              : "No se registraron Materias en este curso"}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CourseDetail;

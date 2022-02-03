//css
import { Database } from "../../../routsApp";
import styles from "../CourseDetail/CourseDetail.module.css";
//from modules
import { NavLink } from "react-router-dom";
//helper
import useHelper from "./useHelper";
//components
import Loading from "../../../components/Desktop/ReusableComponents/Loading/Loading";
//assets
import userDefault from "../../../assets/user.png";
import info from "../../../assets/info.png";
import edit from "../../../assets/edit.png";
import trash from "../../../assets/delete.png";
import goBack from "../../../assets/back-button.png";
import course from "../../../assets/online-class.png";

const SubjectDetail: React.FC = () => {
  const { subject, navigate, confirmDelete, deleteCourse } = useHelper();

  function mapeo(usertype: string) {
    if (subject && usertype === "teachers") {
      console.log(subject[usertype]);
      return subject[usertype]?.map((m: any, i: number) => (
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
            <NavLink to={`/panel/modificar-profesor/${m._id}`}>
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
      {subject ? (
        <>
          <div className={styles.header}>
            <p className={styles.title}>{subject?.name}</p>
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
          <div className={styles.subjects}>
            <p className={styles.userType}>Cursos:</p>
            {subject?.courses.length
              ? subject?.courses.map((m: any, i: number) => (
                  <div key={i} className={styles.subject}>
                    <img
                      src={course}
                      alt="subjectpic"
                      className={styles.bookmark}
                    />
                    <NavLink
                      to={`/panel/detalle-curso/${m._id}`}
                      className={styles.navLink}
                    >
                      <span className={styles.name}>{m.name}</span>
                    </NavLink>
                    <div className={styles.actions}>
                      <NavLink to={`/panel/modificar-curso/${m._id}`}>
                        <img
                          src={edit}
                          alt="editInfo"
                          className={styles.subjectInfo}
                        />
                      </NavLink>
                      <NavLink to={`/panel/detalle-curso/${m._id}`}>
                        <img
                          src={info}
                          alt="coursetInfo"
                          className={styles.subjectInfo}
                        />
                      </NavLink>
                      <img
                        src={trash}
                        alt="trash-course"
                        className={styles.subjectInfo}
                        onClick={() => deleteCourse(m._id, m.name)}
                      />
                    </div>
                  </div>
                ))
              : "No se registraron Cursos en este curso"}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SubjectDetail;

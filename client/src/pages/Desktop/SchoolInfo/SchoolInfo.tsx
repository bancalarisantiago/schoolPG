//css
import styles from "./SchoolInfo.module.css";
//from components
import { NavLink } from "react-router-dom";
//helper
import useHelper from "./useHelper";
//components
import Database from "../../../components/Desktop/Database/Database";
import Loading from "../../../components/Desktop/ReusableComponents/Loading/Loading";
import Calendar from "../../../components/Desktop/Calendar/Calendar";
//assets
import course from "../../../assets/online-class.png";
import info from "../../../assets/info.png";
import edit from "../../../assets/edit.png";
import trash from "../../../assets/delete.png";

const SchoolInfo: React.FC = () => {
  const { school, totalUsers, deleteCourse } = useHelper();

  if (school && school.name)
    return (
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.users}>
            <p className={styles.statname}>Usuarios</p>
            <p className={styles.statnum}>{totalUsers()}</p>
          </div>
          <div className={styles.students}>
            <p className={styles.statname}>Estudiantes</p>
            <p className={styles.statnum}>{school.students.length}</p>
          </div>
          <div className={styles.teachers}>
            <p className={styles.statname}>Profesores</p>
            <p className={styles.statnum}>{school.teachers.length}</p>
          </div>
          <div className={styles.tutors}>
            <p className={styles.statname}>Administradores</p>
            <p className={styles.statnum}>{school.admins.length}</p>
          </div>
        </div>

        <div className={styles.time}>
          <div className={styles.calendarContainer}>
            <div className={styles.calendar}>
              <Calendar />
            </div>
          </div>

          <div className={styles.apiContainer}>{}</div>
        </div>

        <Database
          school={school}
          userType={"estudiantes"}
          schoolType={"students"}
        />
        <Database
          school={school}
          userType={"profesores"}
          schoolType={"teachers"}
        />
        <Database
          school={school}
          userType={"administradores"}
          schoolType={"admins"}
        />
        <div className={styles.courses}>
          <div className={styles.header}>
            <p className={styles.title}>Cursos</p>
          </div>
          <div className={styles.tables}>
            <div className={styles.information}>
              <p className={styles.pname}>nombre</p>
              <p className={styles.pemail}>turno</p>
              <p className={styles.pemail}>Usuarios</p>
              <p className={styles.ptel}>acciones</p>
            </div>
            {school?.courses?.map((m: any, i: number) => {
              return (
                <div key={i} className={styles.course}>
                  <div className={styles.namepic}>
                    <img
                      src={course}
                      alt="coursePic"
                      className={styles.coursePic}
                    />
                    <NavLink
                      to={`/panel/detalle-curso/${m._id}`}
                      className={styles.navLink}
                    >
                      <span className={styles.name}>{m.name}</span>
                    </NavLink>
                  </div>

                  <p className={styles.shifts}>{m.shifts}</p>
                  <p className={styles.shifts}>
                    {m.teachers.length + m.students.length}
                  </p>
                  <div className={styles.actions}>
                    <NavLink to="#">
                      <img
                        src={edit}
                        alt="editInfo"
                        className={styles.userInfo}
                      />
                    </NavLink>
                    <NavLink to={`/panel/detalle-curso/${m._id}`}>
                      <img
                        src={info}
                        alt="courseInfo"
                        className={styles.userInfo}
                      />
                    </NavLink>
                    <img
                      src={trash}
                      alt="trash-user"
                      className={styles.userInfo}
                      onClick={() => deleteCourse(m._id, m.name)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
};

export default SchoolInfo;

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
import DataBaseCourse from "../DataBaseCourse/DataBaseCourse"


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
        <DataBaseCourse/>
        
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

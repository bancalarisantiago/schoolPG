//css
import styles from "./SchoolInfo.module.css";
//helper
import useHelper from "./useHelper";
//components
import Database from "../../../components/Desktop/Database/Database";
import Loading from "../../../components/Desktop/ReusableComponents/Loading/Loading";
import Calendar from "../../../components/Desktop/Calendar/Calendar"

import {useState, useEffect} from "react"
const SchoolInfo: React.FC = () => {
  const { school, totalUsers } = useHelper();

  if (school && school.name)
    return (
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.users}>
            <p className={styles.statname}>Cantidad de usuarios</p>
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
        <div className={styles.calendarContainer}>
            <div className={styles.calendar}>
              <Calendar />
            </div>
        </div>
            <div className={styles.apiContainer}>
                <img src={"https://upload.wikimedia.org/wikipedia/en/b/bc/Weather_on_iOS.png"}/>
            </div>
        <div>
          
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

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
import DataBaseCourse from "../DataBaseCourse/DataBaseCourse";
import DataBaseSubject from "../DataBaseSubject/DataBaseSubject";

const SchoolInfo: React.FC = () => {
  const {
    school,
    weather,
    number,
    bg,
    day,
    dayByNum,
    date,
    totalUsers,
    deleteCourse,
  } = useHelper();
  const aux = number(new Date());
  //console.log(weather);
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

          <div className={styles.apiContainer}>
            {weather ? (
              <>
                <div className={styles[bg(weather.current.weather[0].icon)[0]]}>
                  <p className={styles.day}>{day(new Date())}</p>
                  <p className={styles.date}>
                    <span>{date(new Date().toLocaleDateString())[0]}</span>
                    <span> {date(new Date().toLocaleDateString())[1]}</span>
                    <span> {date(new Date().toLocaleDateString())[2]}</span>
                  </p>
                  <p className={styles.location}>
                    {weather.timezone.split("/")[1]},{" "}
                    {weather.timezone.split("/")[2]}
                  </p>
                  <img
                    src={bg(weather.current.weather[0].icon)[1]}
                    alt="icon"
                    className={styles.icon}
                  />
                  <p className={styles.temp}>
                    {Math.floor(weather.current.temp)}°C
                  </p>
                  <p className={styles.description}>
                    {weather.current.weather[0].description}
                  </p>
                </div>
                <div className={styles.right}>
                  <p className={styles.classOne}>
                    humedad:{" "}
                    <span className={styles.infoW}>
                      {weather.current.humidity}%
                    </span>
                  </p>
                  <p className={styles.class}>
                    sensacion térmica:{" "}
                    <span className={styles.infoW}>
                      {Math.floor(weather.current.feels_like)}
                    </span>
                  </p>
                  <p className={styles.class}>
                    vientos:{" "}
                    <span className={styles.infoW}>
                      {weather.current.wind_speed} km/h
                    </span>
                  </p>
                  <div className={styles.afterDays}>
                    <div className={styles.cont}>
                      {weather?.daily.map((m: any, i: number) => {
                        if (i > aux && i <= aux + 4) {
                          return (
                            <div className={styles.cardW} key={i}>
                              <img
                                src={bg(m.weather[0].icon)[1]}
                                alt="icon"
                                className={styles.afterI}
                              />
                              <p className={styles.afterD}>{dayByNum(i)}</p>
                              <p className={styles.afterT}>
                                {Math.floor(m.temp.max)}°C
                              </p>
                            </div>
                          );
                        } else {
                          return "";
                        }
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
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
        <DataBaseCourse />
        <DataBaseSubject />
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

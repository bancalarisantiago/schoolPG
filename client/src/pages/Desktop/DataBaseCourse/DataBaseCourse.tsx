import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { IState } from "../../../interfaces/index"
import { deleteCourseById, getSchoolById } from "../../../redux/actions/index"
import styles from "../../../pages/Desktop/SchoolInfo/SchoolInfo.module.css"

import course from "../../../assets/online-class.png";
import info from "../../../assets/info.png";
import edit from "../../../assets/edit.png";
import trash from "../../../assets/delete.png";

const DataBaseCourse: React.FC = () => {

    const school = useSelector((state: IState) => state.userSchool);
    const userSession = useSelector((state: IState) => state.userSession);
    const dispatch = useDispatch();

    async function deleteCourse(id: any, name: string) {
        if (window.confirm(`Desea eliminar a ${name}? `) === true) {
          let erase = "El curso ha sido eliminado permanentemente de la base datos";
          dispatch(
            deleteCourseById({
              id,
              schoolId: userSession.user.school,
              accessToken: userSession.accessToken,
            })
          );
          alert(erase);
        }
        dispatch(
          getSchoolById({
            schoolId: userSession.user.school,
            accessToken: userSession.accessToken,
          })
        );
      }


return (
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
              <NavLink to={`/panel/modificar-curso/${m._id}`}>
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
)
}

export default DataBaseCourse
//css
import styles from "../../../pages/Desktop/SchoolInfo/SchoolInfo.module.css";
//from modules
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//interfaces
import { IState } from "../../../interfaces/index";
//actions
import { deleteSubjectById, getSchoolById } from "../../../redux/actions/index";
//assets
import subject from "../../../assets/bookmark.png";
import info from "../../../assets/info.png";
import edit from "../../../assets/edit.png";
import trash from "../../../assets/delete.png";

const DataBaseSubject: React.FC = () => {
  const school = useSelector((state: IState) => state.userSchool);
  const userSession = useSelector((state: IState) => state.userSession);
  const dispatch = useDispatch();

  async function deleteSubject(id: any, name: string) {
    if (window.confirm(`Desea eliminar a ${name}? `) === true) {
      let erase =
        "La materia ha sido eliminado permanentemente de la base datos";
      dispatch(
        deleteSubjectById({
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
        <p className={styles.title}>Materias</p>
      </div>
      <div className={styles.tables}>
        <div className={styles.information}>
          <p className={styles.pname}>nombre</p>
          <p className={styles.pemail}>cursos</p>
          <p className={styles.pemail}>Usuarios</p>
          <p className={styles.ptel}>acciones</p>
        </div>
        {school?.subjects?.map((m: any, i: number) => {
          return (
            <div key={i} className={styles.course}>
              <div className={styles.namepic}>
                <img
                  src={subject}
                  alt="subjectPic"
                  className={styles.subjectPic}
                />
                <NavLink
                  to={`/panel/detalle-materia/${m._id}`}
                  className={styles.navLink}
                >
                  <span className={styles.name}>{m.name}</span>
                </NavLink>
              </div>

              <p className={styles.shifts}>{m.courses.length}</p>
              <p className={styles.shifts}>{m.teachers.length}</p>
              <div className={styles.actions}>
                <NavLink to={`/panel/modificar-materia/${m._id}`}>
                  <img src={edit} alt="editInfo" className={styles.userInfo} />
                </NavLink>
                <NavLink to={`/panel/detalle-materia/${m._id}`}>
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
                  onClick={() => deleteSubject(m._id, m.name)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataBaseSubject;

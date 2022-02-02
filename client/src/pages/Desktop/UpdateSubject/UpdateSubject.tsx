//css
import styles from "./UpdateSubject.module.css";
import teacher from "../../../assets/teacher.png";
import remove from "../../../assets/delete.png";
import bookmark from "../../../assets/bookmark.png";
import edit from "../../../assets/edit.png";
import useHelper from './useHelper';
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";



const UpdateSubject: React.FC = () => {
  const {
    handleDelete,
    userSchool,
    handleClick,
    handleDeleteSubject,
    handleSelect,
    deleteFromList,
    input,
    handleSubmit
  } = useHelper();
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.titlebox}>
          <p className={styles.title}>Modificar Materia</p>
        </div>

        <div className={styles.list}>
          <p className={styles.file}>Materias</p>
          <div className={styles.tables}>
            {
              userSchool.subjects?.map((el: any) => {
                return (

                  <li onClick={() => handleClick(el._id)} value={el._id} key={el._id}>
                    {el.name}
                    <p
                      className={styles.nameList}
                      onClick={() => handleDeleteSubject(el._id)}
                    >
                      <img
                        src={el.picture ? el.picture : bookmark}
                        alt="user"
                        className={styles.user}
                      />
                      <img
                        src={remove}
                        alt="remove"
                        className={styles.remove}
                      />
                    </p>
                  </li>
                )
              })
            }
          </div>
        </div>
        <div className={styles.tables}>
          <p className={styles.file}>Cursos</p>
          <div>
            {userSchool.courses &&
              userSchool.courses.map((e: any) => (
                <p
                  className={styles.nameList}
                  onClick={() => handleDelete(e._id, "courses")}
                >
                  <img
                    src={e.picture ? e.picture : edit}
                    alt="user"
                    className={styles.user}
                  />
                  {e.name}
                  <img
                    src={remove}
                    alt="remove"
                    className={styles.remove}
                  />
                </p>
              ))}
          </div>
        </div>
        <div className={styles.tables}>
          <p className={styles.file}>Profesores</p>
          <div>
            {userSchool.teachers &&
              userSchool.teachers.map((e: any) => (
                <p
                  className={styles.nameList}
                  onClick={() => handleDelete(e._id, "teachers")}
                >
                  <img
                    src={e.picture ? e.picture : teacher}
                    alt="user"
                    className={styles.user}
                  />
                  {e.name.first} {e.name.last}
                  <img
                    src={remove}
                    alt="remove"
                    className={styles.remove}
                  />
                </p>
              ))}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.box2} ${styles.select}`}>
          <select
            name="courses"
            defaultValue={"default"}
            onChange={(e) => handleSelect(e, "courses")}
          >
            <option value="default" disabled>
              Seleccionar Curso
            </option>
            {userSchool.courses?.map((c: any) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.box3}>
          <ul>
            {input?.courses.map((p: any, i: number) => {
              return (
                <li className={styles.li} key={i}>
                  {p.name}
                  <p
                    className={styles.nameList}
                    onClick={(e) => deleteFromList(e, "courses")}
                  ></p>
                  <img
                    src={remove}
                    alt="remove"
                    className={styles.remove}
                  />

                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${styles.box2} ${styles.select}`}>
          <select
            name="teachers"
            defaultValue={"default"}
            onChange={(e) => handleSelect(e, "teachers")}
          >
            <option value="default" disabled>
              Seleccionar Profesor
            </option>
            {userSchool.teachers?.map((c: any) => (
              <option key={c._id} value={c._id}>
                {c.name.first}{c.name.last}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.box3}>
          <ul>
            {input?.teachers.map((p: any, i: number) => {
              return (
                <li className={styles.li} key={i}>
                  {p.name.first}{p.name.last}
                  <p
                    className={styles.nameList}
                    onClick={(e) => deleteFromList(e, "teachers")}
                  ></p>
                  <img
                    src={remove}
                    alt="remove"
                    className={styles.remove}
                  />

                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.box6}>
          <Button text="Modificar Materia" />
        </div>
      </form>
    </div>
  );
};

export default UpdateSubject;
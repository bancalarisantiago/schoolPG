//css
import styles from "./AddCourse.module.css";
//helper
import useHelper from "./useHelper";
//components
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
//assets
import user from "../../../assets/user.png";
import remove from "../../../assets/delete.png";
import bookmark from "../../../assets/bookmark.png";

const AddCourse: React.FC = () => {
  const {
    handleSubmit,
    handleInputChange,
    handleSelect,
    handleDelete,
    handleSearchbar,
    errors,
    userSchool,
    matchUsers,
    state,
    list,
  } = useHelper();

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <div className={styles.top}>
          <div className={styles.inputsDiv}>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className={styles.firstForm}
            >
              <div className={styles.input}>
                <Input
                  placeholder="Nombre del curso"
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className={styles.errorsP}>{errors.name}</p>}
              </div>
              <div className={styles.input}>
                <Input
                  placeholder="Turnos"
                  type="text"
                  name="shifts"
                  value={state.shifts}
                  onChange={(e: any) => handleInputChange(e)}
                />
                {errors.shifts && (
                  <p className={styles.errorsP}>{errors.shifts}</p>
                )}
              </div>
              <Button text="Añadir Curso" disabled={errors.button} />
            </form>
          </div>

          <div className={styles.selectStudents}>
            <div className={styles.divCont}>
              <div className={styles.searchbar}>
                <Input
                  type="text"
                  placeholder="Busqueda..."
                  onChange={handleSearchbar}
                />
                {Object.keys(matchUsers).length ? (
                  <div className={styles.results}>
                    {matchUsers.map((m: any, i: number) =>
                      !m.course.length ? (
                        <p
                          key={i}
                          className={styles.nameSearchbar}
                          onClick={() => handleSelect(m._id, "students")}
                        >
                          <img
                            src={m.picture ? m.picture : user}
                            alt="user"
                            className={styles.user}
                          />
                          {m.name.first} {m.name.last} - {m.document} -{" "}
                          {m.username}
                        </p>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className={styles.selectCont}>
                <select
                  name="Students"
                  id="Students"
                  defaultValue={"default"}
                  onChange={(e) => handleSelect(e, "students")}
                  className={styles.selectTag}
                >
                  <option value="default" disabled>
                    Estudiantes
                  </option>
                  {userSchool.students &&
                    userSchool.students.map((e: any) =>
                      !e.course.length ? (
                        <option key={e._id} value={e._id}>
                          {e.name.first} {e.name.last}
                        </option>
                      ) : (
                        ""
                      )
                    )}
                </select>
              </div>

              <div className={styles.list}>
                {list.students &&
                  list.students.map((e) => (
                    <p
                      className={styles.nameList}
                      onClick={() => handleDelete(e._id, "students")}
                    >
                      <img
                        src={e.picture ? e.picture : user}
                        alt="user"
                        className={styles.user}
                      />
                      {e.name.first} {e.name.last} - {e.document}
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
        </div>

        <div className={styles.bottom}>
          <div className={styles.selectTeachers}>
            <div className={styles.teacherCont}>
              <div className={styles.selectTeacher}>
                <select
                  name="Teachers"
                  id="Teachers"
                  defaultValue={"default"}
                  onChange={(e) => handleSelect(e, "teachers")}
                  className={styles.selectTag2}
                >
                  <option value="default" disabled>
                    Profesores
                  </option>
                  {userSchool.teachers &&
                    userSchool.teachers.map((e: any) => (
                      <option key={e._id} value={e._id}>
                        {e.name.first} {e.name.last}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.list}>
                {list.teachers &&
                  list.teachers.map((e) => (
                    <p
                      className={styles.nameList}
                      onClick={() => handleDelete(e._id, "teachers")}
                    >
                      <img
                        src={e.picture ? e.picture : user}
                        alt="user"
                        className={styles.user}
                      />
                      {e.name.first} {e.name.last} - {e.document}
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

          <div className={styles.selectSubjects}>
            <div className={styles.teacherCont}>
              <div className={styles.selectTeacher}>
                <select
                  name="Subjects"
                  defaultValue={"default"}
                  id="Subjects"
                  onChange={(e) => handleSelect(e, "subjects")}
                  className={styles.selectTag2}
                >
                  <option value="default" disabled>
                    Materias
                  </option>
                  {userSchool.subjects &&
                    userSchool.subjects.map((e: any) => (
                      <option key={e._id} value={e._id}>
                        {e.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.list}>
                {list.subjects &&
                  list.subjects.map((e) => (
                    <p
                      className={styles.nameList}
                      onClick={() => handleDelete(e._id, "subjects")}
                    >
                      <img src={bookmark} alt="book" className={styles.user} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

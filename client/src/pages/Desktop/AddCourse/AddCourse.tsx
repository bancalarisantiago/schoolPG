import useHelper from "./useHelper";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";

//css
import styles from "./AddCourse.module.css";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";

const AddCourse: React.FC = () => {
  const {
    handleSubmit,
    handleDniChange,
    handleInputChange,
    handleSelectTeacher,
    handleDeleteTeacher,
    handleSelectSubjects,
    handleDeleteSubject,
    handleSelect,
    handleSearch,
    handleRefresh,
    handleDelete,
    subjects,
    state,
    stateDni,
    student,
    teachers,
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
              </div>

              <div className={styles.input}>
                <Input
                  placeholder="Turnos"
                  type="text"
                  name="shifts"
                  value={state.shifts}
                  onChange={(e: any) => handleInputChange(e)}
                />
              </div>
              <Button text="Añadir Curso" />
            </form>
          </div>

          <div className={styles.selectStudents}>
            <div className={styles.divCont}>
              <form
                onSubmit={(e) => handleSearch(e)}
                className={styles.searchbar}
              >
                <div className={styles.input}>
                  <Input
                    type="text"
                    placeholder="Busqueda..."
                    value={stateDni.document}
                    onChange={(e: any) => handleDniChange(e)}
                  />
                </div>
                <div className={styles.butt}>
                  <button className={styles.buttTag}>Buscar</button>
                </div>
              </form>

              <div className={styles.selectCont}>
                <select
                  name="Students"
                  id="Students"
                  onChange={handleSelect}
                  className={styles.selectTag}
                >
                  <option value="">Estudiantes</option>
                  {student.map((e: any) => (
                    <option key={e._id} value={e._id}>
                      {e.name.first} {e.name.last}
                    </option>
                  ))}
                </select>
                <button onClick={handleRefresh} className={styles.buttTag}>
                  Recargar Lista
                </button>
              </div>

              <div className={styles.list}>
                {list.student &&
                  list.student.map((e) => (
                    <div key={e._id} className={styles.student}>
                      <span className={styles.name}>
                        {e.name.first} {e.name.last}
                      </span>
                      <button
                        onClick={() => handleDelete(e._id)}
                        className={styles.close}
                      >
                        X
                      </button>
                    </div>
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
                  onChange={handleSelectTeacher}
                  className={styles.selectTag2}
                >
                  <option>Profesores</option>
                  {teachers.map((e: any) => (
                    <option key={e._id} value={e._id}>
                      {e.name.first} {e.name.last}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.newList}>
                {list.teachers &&
                  list.teachers.map((e) => (
                    <div key={e._id} className={styles.teacher}>
                      <span className={styles.name}>
                        {e.name.first} {e.name.last}
                      </span>
                      <button
                        onClick={() => handleDeleteTeacher(e._id)}
                        className={styles.closeButt}
                      >
                        X
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className={styles.selectSubjects}>
            <div className={styles.teacherCont}>
              <div className={styles.selectTeacher}>
                <select
                  name="Subjects"
                  id="Subjects"
                  onChange={handleSelectSubjects}
                  className={styles.selectTag2}
                >
                  <option>Materias</option>
                  {subjects.map((e: any) => (
                    <option key={e._id} value={e._id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.newList}>
                {list.subjects &&
                  list.subjects.map((e) => (
                    <div key={e._id} className={styles.teacher}>
                      <span className={styles.name}>{e.name}</span>
                      <button
                        onClick={() => handleDeleteSubject(e._id)}
                        className={styles.closeButt}
                      >
                        X
                      </button>
                    </div>
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

import styles from "./ModifyCourse.module.css";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import useHelper from "./useHelper";
const ModifyCourse = () => {
  const {
    list,
    students,
    teachers,
    subjects,
    state,
    handleChange,
    deleteFromList,
    handleOnSubmit,
    handleInputOnChangeList,
  } = useHelper();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titlebox}>
        <p className={styles.title}>Actualizar Curso : {state.name}</p>
        <div className={styles.backbox}>
          {/* <ButtonBack onClick={getBack} /> */}
        </div>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.inputsContainer}>
          <div className={styles.input}>
            <Input
              placeholder={"Nombre"}
              text="Nombre"
              name="name"
              onChange={handleChange}
              value={state.name}
            />
          </div>
          <div className={styles.input}>
            <Input
              placeholder={"Turno"}
              text="Turno"
              name="shifts"
              onChange={handleChange}
              value={state.shifts}
            />
          </div>
        </div>
        <div className={styles.selectsContainer}>
          <div className={styles.studentsContainer}>
            <label>
              Modificar Alumnos
              <div className={styles.select}>
                <select
                  name="students"
                  defaultValue={"default"}
                  onChange={handleInputOnChangeList}
                >
                  <option value="default" disabled>
                    Seleccionar Alumno
                  </option>
                  {students?.map((s: any) => (
                    <option
                      key={`${s.name.first}${s.name.last}key`}
                    >{`${s.name.first} ${s.name.last}`}</option>
                  ))}
                </select>
              </div>
              <div className={styles.tables}>
                <ul>
                  {list.students?.map((p: any) => {
                    return (
                      <li className={styles.li} key={`${p.name.first}key`}>
                        <p>
                          {p.name.first} {p.name.last}
                        </p>
                        <button
                          className={styles.btn}
                          type="button"
                          value={p._id}
                          onClick={deleteFromList}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </label>
          </div>
          <div className={styles.teachersContainer}>
            <label>
              Modificar Profesor
              <div className={styles.select}>
                <select
                  name="teachers"
                  defaultValue={"default"}
                  onChange={handleInputOnChangeList}
                >
                  <option value="default" disabled>
                    Seleccionar Profesor
                  </option>
                  {teachers.map((t: any) => (
                    <option>{`${t.name.first} ${t.name.last}`}</option>
                  ))}
                </select>
              </div>
            </label>
            <div className={styles.tables}>
              <ul>
                {list.teachers?.map((p: any) => {
                  return (
                    <li className={styles.li} key={`${p.name.first}key`}>
                      <p>
                        {p.name.first} {p.name.last}
                      </p>
                      <button
                        className={styles.btn}
                        type="button"
                        value={p._id}
                        onClick={deleteFromList}
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.subjectsContainer}>
            <label>
              Modificar Materia
              <div className={styles.select}>
                <select
                  name="subjects"
                  defaultValue={"default"}
                  onChange={handleInputOnChangeList}
                >
                  <option value="default" disabled>
                    Seleccionar Materia
                  </option>
                  {subjects.map((subject: any) => (
                    <option key={subject.name}>{subject.name}</option>
                  ))}
                </select>
              </div>
              <div className={styles.tables}>
                <ul>
                  {list.subjects?.map((p: any) => {
                    return (
                      <li className={styles.li} key={`${p.name}key`}>
                        <p>{p.name}</p>
                        <button
                          className={styles.btn}
                          type="button"
                          value={p.name}
                          onClick={deleteFromList}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </label>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button text="Actualizar Informacion" />
        </div>
      </form>
    </div>
  );
};

export default ModifyCourse;

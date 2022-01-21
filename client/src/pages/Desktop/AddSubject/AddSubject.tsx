import useHelper from "./useHelper";
import styles from "./AddSubject.module.css";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";

const AddSubject: React.FC = () => {
  const {
    handleSubmit,
    handleInputChange,
    handleSelect,
    input,
    deleteFromList,
    userSchool,
    errors,
  } = useHelper();

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <div className={styles.titlebox}>
            <p className={styles.title}>Añadir Subject</p>
          </div>
          <div>
            <label className={styles.box1} htmlFor="name"></label>
            <Input
              placeholder="Nombre"
              autoComplete="off"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className={styles.errorsP}>{errors.name}</p>}
          </div>
          <div className={`${styles.box2} ${styles.select}`}>
            <select
              name="courses"
              defaultValue={"default"}
              onChange={handleSelect}
            >
              <option value="default" disabled>
                Seleccionar Curso
              </option>
              {userSchool.courses?.map((c: any) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className={styles.box3}>
            <ul>
              {input?.courses.map((p: any) => {
                return (
                  <li className={styles.li} key={`${p.name}key`}>
                    {p.name}
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
          <div className={`${styles.box4} ${styles.select}`}>
            <select
              name="teachers"
              defaultValue={"default"}
              onChange={handleSelect}
            >
              <option value="default" disabled>
                Seleccionar Teacher
              </option>
              {userSchool.teachers?.map((c: any, _id: any) => (
                <option value={c._id} key={c._id}>
                  {c.name.first}
                  {c.name.last}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.box5}>
            <ul>
              {input?.teachers.map((p: any) => {
                return (
                  <li className={styles.li} key={`${p.name}key`}>
                    {p.name}
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
          <div className={styles.box6}>
            <Button text="Añadir Materia" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubject;

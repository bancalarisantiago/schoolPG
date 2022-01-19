//css
import useHelper from "./useHelper";
import styles from "./AddSubject.module.css";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from '../../../components/Desktop/ReusableComponents/Input/Input';


const AddSubject: React.FC = () => {
  const {
    handleSubmit,
    handleInputChange,
    handleSelect,
    input,
    handleDelete,
    userSchool,
    errors
  } = useHelper();
  console.log(input);

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Añadir Subject</p>
        </div>
        <div>
          <label className={styles.inputNames} htmlFor="name">
            Nombre:{" "}
          </label>
          <Input
            type="text"
            placeholder="name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className={styles.errorsP}>{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="curso"><strong>Selecionar curso</strong></label>
          <select onChange={handleSelect}>
            {
              userSchool.courses?.map((i: any) => (
                <><option value={i.name}>{i.name}</option></>
              ))
            }
            {errors.course && (
              <p className={styles.errorsP}>{errors.course}</p>
            )}
            <ul>
              <li>{input.courses.map((i: any) => i + ", ")}</li>
            </ul>
            {input.courses.map((el:any) => 
              <div>
                <p>{el}</p>
                <button className="botonX" onClick={() => handleDelete(el)}>x</button>
              </div>
            )}
          </select>
          <label htmlFor="teachers"><strong>Teachers</strong></label>
          <select onChange={handleSelect}>
            {
              userSchool.courses.teachers?.map((i: any) => (
                <><option value={i.name}>{i.name}</option></>
              ))
            }
            {errors.teacher && (
              <p className={styles.errorsP}>{errors.teacher}</p>
            )}
            <ul>
              <li>{input.teachers.map((i: any) => i + ", ")}</li>
            </ul>
            {input.teachers.map((el: any) =>
              <div>
                <p>{el}</p>
                <button className="botonX" onClick={() => handleDelete(el)}>x</button>
              </div>
            )}
          </select>
        </div>
        <Button text="createSubject" />
      </form>
    </div>
  );
};

export default AddSubject;

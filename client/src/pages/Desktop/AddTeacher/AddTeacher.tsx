import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./AddTeacher.module.css";

import useHelper from "./useHelper";

const AddTeacher: React.FC = () => {
  const {
    handleInputChange,
    handleNameChange,
    handleSubmit,
    input,
    name,
    handleInputOnChangeList,
    deleteFromList,
    userSchool,
  } = useHelper();

  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Añadir Profesor</p>
        </div>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <Input
            name="first"
            autoComplete="off"
            placeholder="Nombre"
            value={name.first}
            onChange={handleNameChange}
          />
          <Input
            name="last"
            autoComplete="off"
            placeholder="Apellido"
            value={name.last}
            onChange={handleNameChange}
          />
          <Input
            name="document"
            autoComplete="off"
            placeholder="Documento"
            value={input.document}
            onChange={handleInputChange}
          />
          <Input
            name="username"
            autoComplete="off"
            placeholder="Usuario"
            value={input.username}
            onChange={handleInputChange}
          />
          <Input
            name="password"
            autoComplete="off"
            placeholder="Contraseña"
            value={input.document}
            onChange={handleInputChange}
          />
          <Input
            name="email"
            autoComplete="off"
            placeholder="E-mail"
            value={input.email}
            onChange={handleInputChange}
          />
          <select
            name="subjects"
            defaultValue={"default"}
            onChange={handleInputOnChangeList}
          >
            <option value="default" disabled>
              Seleccionar Materia
            </option>
            {userSchool.subject?.map((c: any) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
          <div>
            <ul>
              {input?.subject.map((p: any) => {
                let subject = input.subject.find((ele: any) => ele === p);
                return (
                  <li key={`${subject}key`}>
                    {subject}
                    <button
                      type="button"
                      value={subject}
                      onClick={deleteFromList}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <select
            name="courses"
            defaultValue={"default"}
            onChange={handleInputOnChangeList}
          >
            <option value="default" disabled>
              Seleccionar Curso
            </option>
            {userSchool.courses?.map((c: any) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
          <Button text="Añadir Profesor" />
        </form>
        <div>
          <ul>
            {input?.courses.map((p: any) => {
              let course = input.courses.find((ele: any) => ele === p);
              return (
                <li key={`${course}key`}>
                  {course}
                  <button type="button" value={course} onClick={deleteFromList}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;

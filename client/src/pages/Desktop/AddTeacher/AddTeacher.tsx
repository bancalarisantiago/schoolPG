import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./AddTeacher.module.css";

import useHelper from "./useHelper"

const AddTeacher: React.FC = () => {

  const { 
    handleInputChange,
    handleNameChange, 
    handleSubmit,  
    input, 
    name , 
    handleInputOnChangeList,
    deleteFromList, 
    courseState, 
    subjectState, 
    } = useHelper();

  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Añadir Profesor</p>
        </div>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <div className={styles.box1}>
            <Input 
              name="first"
              autoComplete="off"
              placeholder="Nombre"
              value={name.first}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.box2}>
            <Input 
              name="last"
              autoComplete="off"
              placeholder="Apellido"
              value={name.last}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.box3}>
            <Input 
              name="document"
              autoComplete="off"
              placeholder="Documento"
              value={input.document}
              onChange={handleInputChange}
            />
          </div>
           <div className={styles.box4}>
               <select
                  name="courses"
                  defaultValue={"default"}
                  onChange={handleInputOnChangeList}
                    >
                      <option value="default" disabled >Seleccionar Curso</option>
                          {courseState?.map((c:any) => 
                          <option key={c.name}>{c.name}</option> )}
                </select>
                
          </div>
            <div className={styles.box9}>
                  <ul>
                  {input?.courses.map((p: any )=> {
                    let course = input.courses.find((ele:any) => ele === p )
                    return <li className={styles.li} key={`${course}key`}>{course}
                    <button className={styles.btn}type='button' value={course} onClick={deleteFromList}>X</button>
                    </li>
                  }
                  )}
                  </ul>
                </div>
            <div className={styles.box5}>
              <Input 
                name="username"
                autoComplete="off"
                placeholder="Usuario"
                value={input.username}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.box6}>
              <Input 
                name="password"
                autoComplete="off"
                placeholder="Contraseña"
                value={input.document}
                onChange={handleInputChange} 
              />
            </div>
            <div className={styles.box7}>
                <Input 
                  name="email"
                  autoComplete="off"
                  placeholder="E-mail"
                  value={input.email}
                  onChange={handleInputChange}  
                  />
              </div>
            <div className={styles.box8}>
                <select
                name="subjects"
                defaultValue={"default"}
                onChange={handleInputOnChangeList}
                >
                   <option value="default" disabled >Seleccionar Materia</option>
                      {subjectState?.map((c:any) => 
                      <option key={c.name}>{c.name}</option> )}
              </select>
              
            </div>
            <div className={styles.box10}>
                  <ul>
                  {input?.subject.map((p: any )=> {
                    let subject = input.subject.find((ele:any) => ele === p )
                    return <li key={`${subject}key`}><div className={styles.divBtn}>{subject}
                    <button type='button' value={subject} onClick={deleteFromList}>X</button>
                    </div></li>
                  }
                  )}
                  </ul>
                </div>
                <div className={styles.box11}>
          <Button text="Añadir Profesor" />
          </div>
        </form>
            
      </div>
    </div>
  );
};

export default AddTeacher;

import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import UpdateComponent from "../UpdateComponent/UpdateComponent";

import styles from "./UpdateTeacher.module.css"

 
const UpdateTeacher: React.FC= () => {

const userTeacher = useSelector((state: any) => state.userDetail)
const userSchool = useSelector((state: any) => state.userSchool)
const [ input, setInput ] = useState({
    courses: userTeacher.course,
    subject:  userTeacher.subject
});

useEffect(()=>{console.log(input)},[input])
 
    function handleInputOnChangeList(event: any) {
        const { name, value } = event.target;

        if (name === "courses") {
        if (!input.courses.map((m: any) => m.name === value).includes(true)) {
            input.courses.push(
                userSchool.courses.filter((m: any) => m.name === value)
            );
        } else {
            alert("El curso ya esta seleccionado");
        }
        }
        if (name === "subjects") {
            console.log(event.target.name)
        if (!input.subject.map((m: any) => m.name === value).includes(true)) {
            input.subject.push(
                userSchool.subjects.filter((m: any) => m.name === value)
            );
        } else {
            alert("La materia ya esta seleccionada");
        }
        }
        setInput({
            ...input,
            subject: input.subject.flat(),
            courses: input.courses.flat()
          });
          event.target.value = "default";
    }
    

    function deleteFromList(event: any) {

        

        if (
          input.courses
            .map((m: any) => m.name === event.target.value)
            .includes(true)
        ) {
          let copy = input.courses.filter(
            (p: any) => p.name !== event.target.value
          );
          setInput({ ...input, courses: copy });
        }
        if (
          input.subject
            .map((m: any) => m.name === event.target.value)
            .includes(true)
        ) {
          let copy = input.subject.filter(
            (g: any) => g.name !== event.target.value
          );
          setInput({ ...input, subject: copy });
        }
      }


return (
        <>
         <UpdateComponent userType={"profesores"}/>
         <h1>MODIFFICAR MATERIAS Y CURSO</h1>
        {input.subject && 
         <div className={styles.subjectsContainer}>
         <div className={styles.select}>
            <select
              name="subjects"
              defaultValue={"default"}
              onChange={handleInputOnChangeList}
            >
              <option value="default" disabled>
                Seleccionar Materia
              </option>
              {userSchool.subjects?.map((s: any) => (
                <option key={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div className={styles.tables}>
            <ul>
              {input?.subject.map((p: any) => {
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
          </div> }
          
          <div className={styles.containerCourse}>
            <div className={styles.select}>
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
            </div>
            <div >
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
          
          </div>
        </>
)
}

export default UpdateTeacher
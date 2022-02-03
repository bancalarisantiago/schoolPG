//css
import styles from "./AddAttendance.module.css";
import useHelper from "./useHelper";
import userDefault from "../../../assets/user.png";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
const AddAttendance: React.FC = () => {
  const {
    handleSelectCourse,
    courseStudents,
    onCheckuno,
    onCheckdos,
    /*    onCheckuno,
    onCheckdos, */
    onChange,
    attendance,
    userSchool,
    handleSubmit,
  } = useHelper();



  return (

    <div >
      <form className={styles.database}  onSubmit={handleSubmit} >
      <div className={styles.header}>
        <p className={styles.title}>Asitencia</p>
      </div>


      <div className={`${styles.box2} ${styles.select}`}>
        <select
          name="courses"
          defaultValue={"default"}
          onChange={handleSelectCourse}
        >
          <option value="default" disabled>
            Seleccionar Curso
          </option>

          {userSchool.courses?.map((c: any) => (
            <option key={c.name} 
            value={c._id}
            >
              {c.name}
            </option>
          ))}


        </select>
      </div>
      <div className={`${styles.box1} ${styles.input}`}>
        <input className={styles.date}type="date" id="" name=""
          value={attendance.date} onChange={onChange} />
      </div>


      <div className={styles.tables}>
        <div className={styles.information}>
          <p className={styles.pname}>nombre</p>
          <p className={styles.pemail}>correo electronico</p>
          <p className={styles.ptel}>asistio</p>
          <p className={styles.ptel}>tarde</p>
        </div>
      </div>


      {userSchool.students?.map((s: any , i:number) => {
        if ( courseStudents?.students?.includes(s._id)) {
          return (
        <div key={s._id} className={styles.user}>
          <div className={styles.namepic}>
            <img
              src={s.picture ? s.picture : userDefault}
              alt="profilepic"
              className={styles.profilepic}
            />
            <h3 className={styles.name}>{`${s.name.first} ${s.name.last}`}</h3>
            <p className={styles.email}>{s.email}</p>
            <p className={styles.cellphone}>{s.cellphone}</p>
            <div className={styles.checkbox}>
              <input className={styles.checkuno}
               type="checkbox"
               name="attended"
               onClick={(e) => onCheckuno(e, s._id)}
               /* onClick={onCheckuno} */
            /*    value={attendance.attendance.attended} */
                ></input>
              <input className={styles.checkdos} 
              type="checkbox"
              name="late"
              onClick={(e) => onCheckdos (e, s._id)}
              /* value={attendance.attendance.late} */
              /* onClick={onCheckdos} */
              ></input>
            </div>
          </div>
        </div>
          )}
        })}
          <div className={styles.box6}>
            <Button text="Añadir Asistencia" />
          </div>
        </form>
    </div>
  )
}

export default AddAttendance;
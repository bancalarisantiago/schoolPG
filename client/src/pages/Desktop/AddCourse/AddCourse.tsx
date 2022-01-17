import useHelper from "./useHelper"

//css
import styles from "./AddCourse.module.css";


const AddCourse: React.FC = () => {

  const{handleSubmit,
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
    list}= useHelper()

return (
    <div>
         <form onSubmit={(e) => handleSubmit(e)}>
         <span>Course Name: 
        <input
        type="text"
        name="name"
/*           placeholder="Course name" */
        value={state.name}
        onChange={(e) => handleInputChange(e)}
        />
        </span>
        <span>Shifts: 
        <input
        type="text"
        name="shifts"
      /*   placeholder="Shifts" */
        value={state.shifts}
        onChange={(e) => handleInputChange(e)}
        />
        </span>
        <label>
        <select name="Students" id="Students" onChange={handleSelect}>
        <option value="" >Students</option>
        {student.map((e : any)=>(
        <option key={e._id} value={e._id}>{e.name.first} {e.name.last}</option>
        ))}
        </select>
        </label>
        <input type='submit' value='Add course'/>
        </form>
        <form onSubmit={(e) => handleSearch(e)}>
        <input
        type='text'
        placeholder="Student By DNI"
        value={stateDni.document}
        onChange={(e:any)=> handleDniChange(e)}
        />
        <input type='submit' value='Go'/>
    </form>
        <button onClick={handleRefresh}>Refresh</button>
        {   
            list.student && list.student.map(e =>(
                <div key={e._id}>
                    <p  >{e.name.first} {e.name.last}</p>
                    <button onClick={() => handleDelete(e._id)} > X </button>
                </div>
            ))
        }
        <label>
        <select name="Teachers" id="Teachers" onChange={handleSelectTeacher}>
        <option>Teachers</option>
        {teachers.map((e: any)=>(
        <option key={e._id} value={e._id}>{e.name.first} {e.name.last}</option>
        ))}
        </select>
        </label>
        {   
            list.teachers && list.teachers.map(e =>(
                <div key={e._id}>
                    <p>{e.name.first} {e.name.last}</p>
                    <button onClick={() => handleDeleteTeacher(e._id)} > X </button>
                </div>
            ))
        }
        <label>
        <select name="Subjects" id="Subjects" onChange={handleSelectSubjects}>
        <option>Subjects</option>
        {subjects.map((e: any)=>(
        <option key={e._id} value={e._id}>{e.name}</option>
        ))}
        </select>
        </label>
        {   
            list.subjects && list.subjects.map(e =>(
                <div key={e._id}>
                    <p>{e.name}</p>
                    <button onClick={() => handleDeleteSubject(e._id)} > X </button>
                </div>
            ))
        }
    </div>
)
}

export default AddCourse;

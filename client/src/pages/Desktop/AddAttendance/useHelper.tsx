import { useSelector, useDispatch } from "react-redux";
import { IState, ISubject } from "../../../interfaces";
import { useEffect, useState } from "react";
import { idText } from "typescript";
import axios from "axios";
import { KeyObject } from "crypto";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSchool = useSelector((state: IState) => state.userSchool);
  const [course, setCourse] = useState("");
  const [courseStudents, setCourseStudents] = useState<any>([]);
  const [attendance, setAttendance] = useState<any>({
    date: "",
    attendance: [


    ]
  }
  );
  

  const onCheckuno = (e: any, id: string) => {
  if(attendance.attendance.length === 0){
    setAttendance({
      ...attendance,
      attendance: [
        {
          userId: id,
          attended: true,
          late: false
        }
      ]
    });
  }
  if (attendance.attendance.length > 0) {
    attendance.attendance.find((a:any) => a.userId === id) ?
    setAttendance({
      ...attendance,
      attendance: attendance.attendance.map((a:any) => {
        if (a.userId === id) {
          return {
            ...a,
            attended: !a.attended
          }
        }
        return a;
      })
    })
    :
    setAttendance({
      ...attendance,
      attendance: [
        ...attendance.attendance,
        {
          userId: id,
          attended: true,
          late:false
        }
      ]
    });
  }
  };


  const onCheckdos = (e: any, id: string) => {
  if(attendance.attendance.length === 0){
    setAttendance({
      ...attendance,
      attendance: [
        {
          userId: id,
          late: true,
        }
      ]
    });
  }
  if (attendance.attendance.length > 0) {
    attendance.attendance.find((a:any) => a.userId === id) ?
    setAttendance({
      ...attendance,
      attendance: attendance.attendance.map((a:any) => {
        console.log(a, 'soy el a antes del if')
        if (a.userId === id) {
          return {
            ...a,
            late: !a.late
            
          }
        }
        console.log(a,"entre al return a");
        return a;
      })
    })
    :
    setAttendance({
      ...attendance,
      attendance: [
        ...attendance.attendance,
        {
          userId: id,
          late: true,
        }
      ]
    });
  }
  };

      const handleSelectCourse = (e: any) => {
        setCourse(e.target.value);
        setCourseStudents(userSchool.courses?.find((c: any) => {
          if (c._id == e.target.value) {
            return c.students;
          }
        }));
      };

      

      const onChange = (e: any) => {
        const dateConAttendance = courseStudents?.classes?.map((c: any) => c.date);
        

       if (dateConAttendance?.includes(e.target.value)){
         alert('Ya existe una asistencia para esa fecha');
       } else {
        setAttendance({
          date: e.target.value,
          attendance: [
            ...attendance.attendance
          ]
        });
        }
      };



      const handleSubmit = (e: any) => {
        e.preventDefault();
        if(attendance.attendance.length > 0){
        const data = courseStudents.students.map((id:any)=> {
          if (!attendance.attendance.find((s:any)=>s.userId === id)){
            return {
              ...attendance,
            attendance: [
              ...attendance.attendance,
              {
                userId: id,
                attended: false,
                late: false,
              }
            ]
            }

          }   
        })
        
       try {

          axios.put(`http://localhost:5000/api/course/${course}`, data);
          
        } catch (error) {
          console.log(error);
        }  
        
        setAttendance({
          date: "",
          attendance: []
        });
        alert("La asistencia se envio exitosamente");
        } else {
          return alert("No se puede enviar una asistencia vacia");
        }
      };
    

      

      return {

        handleSelectCourse,
        courseStudents,
        onCheckuno,
        onCheckdos,
        onChange,
        attendance,
        userSchool,
        handleSubmit
      };
    }

export default useHelper;

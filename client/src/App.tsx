//css
import styles from "./App.module.css";
//from modules
import React from "react";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
//import Modal from "react-modal"

//pages
import Login from "./pages/Desktop/Login/Login";
import Panel from "./pages/Desktop/Panel/Panel";

import CreateSchool from "./pages/Desktop/CreateSchool/CreateSchool";
import AddStudent from "./pages/Desktop/AddStudent/AddStudent";
import UpdateStudent from "./pages/Desktop/UpdateStudent/UpdateStudent";
import AddTeacher from "./pages/Desktop/AddTeacher/AddTeacher";
import UpdateTeacher from "./pages/Desktop/UpdateTeacher/UpdateTeacher";
import AddAdmin from "./pages/Desktop/AddAdmin/AddAdmin";
import UpdateAdmin from "./pages/Desktop/UpdateAdmin/UpdateAdmin";
import AddCourse from "./pages/Desktop/AddCourse/AddCourse";
import UpdateCourse from "./pages/Desktop/UpdateCourse/UpdateCourse";
import AddEvent from "./pages/Desktop/AddEvent/AddEvent";
import UpdateEvent from "./pages/Desktop/UpdateEvent/UpdateEvent";
import AddSubject from "./pages/Desktop/AddSubject/AddSubject";
import UpdateSubject from "./pages/Desktop/UpdateSubject/UpdateSubject";
/* import AboutUs from "./pages/Desktop/AboutUs/AboutUs"
import General from "./pages/Desktop/General/General"; */
import SchoolInfo from "./pages/Desktop/SchoolInfo/SchoolInfo";
import Error from "./pages/Desktop/Error/Error";
import Profile from "./pages/Desktop/Profile/Profile";

//Modal.setAppElement("#root")

const App: React.FC = () => {
  const location: string = useLocation().pathname;

  return (
    <div className={styles.main}>
      <Routes>
        <Route path="addCourse" element={<AddCourse />} />

        {location === "/login" && <Route path="/login" element={<Login />} />}

        <Route path="panel" element={<Panel />}>
          <Route index element={<CreateSchool />} />

          <Route path="general" element={<SchoolInfo />} />

          <Route path="añadir-alumno" element={<AddStudent />} />
          <Route path="modificar-alumno" element={<UpdateStudent />} />

          <Route path="añadir-profesor" element={<AddTeacher />} />
          <Route path="modificar-profesor" element={<UpdateTeacher />} />

          <Route path="añadir-admin" element={<AddAdmin />} />
          <Route path="modificar-admin" element={<UpdateAdmin />} />

          <Route path="añadir-curso" element={<AddCourse />} />
          <Route path="modificar-curso" element={<UpdateCourse />} />

          <Route path="añadir-evento" element={<AddEvent />} />
          <Route path="modificar-calendario" element={<UpdateEvent />} />

          <Route path="añadir-materias" element={<AddSubject />} />
          <Route path="modificar-materias" element={<UpdateSubject />} />

          <Route path="*" element={<Error />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;

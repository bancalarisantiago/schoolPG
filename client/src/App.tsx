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
import AboutUs from "./pages/Desktop/AboutUs/AboutUs"


//Modal.setAppElement("#root")

const App: React.FC = () => {
  const location: string = useLocation().pathname;

  return (
    <div className={styles.main}>
      <AboutUs/>
      <Routes>
        {location === "/login" && <Route path="/login" element={<Login />} />}

        <Route path="panel" element={<Panel />}>
          <Route path="create-school" element={<CreateSchool />} />

          <Route path="add-student" element={<AddStudent />} />
          <Route path="update-student" element={<UpdateStudent />} />

          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="update-teacher" element={<UpdateTeacher />} />

          <Route path="add-admin" element={<AddAdmin />} />
          <Route path="update-admin" element={<UpdateAdmin />} />

          <Route path="add-course" element={<AddCourse />} />
          <Route path="update-course" element={<UpdateCourse />} />

          <Route path="add-event" element={<AddEvent />} />
          <Route path="update-event" element={<UpdateEvent />} />

          <Route path="add-subject" element={<AddSubject />} />
          <Route path="update-subject" element={<UpdateSubject />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

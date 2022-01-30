//css
import styles from "./App.module.css";
//from modules
import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import appHelper from "./appHelper";

//pages
import {
  Login,
  Panel,
  CreateSchool,
  AddStudent,
  AddTeacher,
  AddAdmin,
  UpdateComponent,
  AddCourse,
  UpdateCourse,
  AddEvent,
  UpdateEvent,
  AddSubject,
  UpdateSubject,
  SchoolInfo,
  Error,
  Profile,
  UserDetail,
  Database,
} from ".//routsApp";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const location: string = useLocation().pathname;
  const navigate = useNavigate();
  const { school } = appHelper();
  useEffect(() => {
    location === "/" && navigate("/login");
  });

  return (
    <div className={styles.main}>
      <Routes>
        <Route path="addCourse" element={<AddCourse />} />

        {location === "/login" && <Route path="/login" element={<Login />} />}

        <Route path="panel" element={<Panel />}>
          <Route index element={<CreateSchool />} />

          <Route path="general" element={<SchoolInfo />} />

          <Route path="agregar-alumno" element={<AddStudent />} />
          <Route
            path="modificar-alumno"
            element={
              <Database
                school={school}
                userType={"estudiantes"}
                schoolType={"students"}
              />
            }
          />
          <Route
            path="modificar-alumno/:id"
            element={<UpdateComponent userType={"estudiantes"} />}
          />
          <Route path="agregar-profesor" element={<AddTeacher />} />
          <Route
            path="modificar-profesor"
            element={
              <Database
                school={school}
                userType={"profesores"}
                schoolType={"teachers"}
              />
            }
          />
          <Route
            path="modificar-profesor/:id"
            element={<UpdateComponent userType={"profesores"} />}
          />
          <Route path="agregar-admin" element={<AddAdmin />} />
          <Route
            path="modificar-admin"
            element={
              <Database
                school={school}
                userType={"administradores"}
                schoolType={"admins"}
              />
            }
          />
          <Route
            path="modificar-admin/:id"
            element={<UpdateComponent userType={"administradores"} />}
          />
          <Route path="agregar-curso" element={<AddCourse />} />
          <Route path="modificar-curso" element={<UpdateCourse />} />

          <Route path="agregar-evento" element={<AddEvent />} />
          <Route path="modificar-calendario" element={<UpdateEvent />} />

          <Route path="agregar-materias" element={<AddSubject />} />
          <Route path="modificar-materias" element={<UpdateSubject />} />

          <Route path="profile" element={<Profile />} />
          <Route path="detalle-usuario/:id" element={<UserDetail />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

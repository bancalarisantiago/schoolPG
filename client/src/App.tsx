//css
import styles from "./App.module.css";
//from modules
import React from "react";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";

//pages
import Login from "./pages/Desktop/Login/Login";
import Panel from "./pages/Desktop/Panel/Panel";
import AddStudent from "./components/Desktop/AddStudent/AddStudent";

const App: React.FC = () => {
  const location: string = useLocation().pathname;

  return (
    <div className={styles.main}>
      <Routes>
        {location === "/login" && <Route path="/login" element={<Login />} />}
        <Route path="panel" element={<Panel />}>
          {/* <Route index element={<AddStudent />} /> */}
          <Route path="add-student" element={<AddStudent />} />
          {/* <Route path="*" element={<h2>Hola</h2>} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

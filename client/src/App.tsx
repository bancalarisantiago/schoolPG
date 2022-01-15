//css
import styles from "./App.module.css";
//from modules
import React from "react";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";

//pages
import Login from "./pages/Desktop/Login/Login";
import Panel from "./pages/Desktop/Panel/Panel";
import Calendario from "./components/Admin/Calendario";
import AddSchool from "./components/Admin/AddSchool";

const App: React.FC = () => {
  const location: string = useLocation().pathname;

  return (
    <div className={styles.main}>
      <Routes>
        {location === "/login" && <Route path="/login" element={<Login />} />}
        <Route path="/panel" element={<Panel />} />
        <Route path="/panel/addSchool" element={<AddSchool />} />
        <Route path="/calend" element={<Calendario />} />
      </Routes>
    </div>
  );
};

export default App;

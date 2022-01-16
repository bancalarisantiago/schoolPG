//css
import styles from "./Panel.module.css";
import "../../../styles/theme.css";
//helper
import useHelper from "./useHelper";

//from modules
import { Outlet, useNavigate } from "react-router-dom";

//components
import Sidebar from "../../../components/Desktop/SideBar/Sidebar";
import Navbar from "../../../components/Desktop/Navbar/Navbar";
import { useEffect } from "react";

const Panel: React.FC = () => {
  const { validate, location, school } = useHelper();

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar validate={validate} location={location} />
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;

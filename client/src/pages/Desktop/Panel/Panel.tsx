//css
import styles from "./Panel.module.css";
import "../../../styles/theme.css";
//helper
import useHelper from "./useHelper";

//from modules

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//components
import Sidebar from "../../../components/Desktop/SideBar/Sidebar";
import Navbar from "../../../components/Desktop/Navbar/Navbar";


const Panel: React.FC = () => {
  const { validate, location } = useHelper();
  const navigate = useNavigate();
  useEffect(() => {
    !validate.accessToken && navigate("/login");
  }, []);
  return (
    <>
      {validate.accessToken ? (
        <div className={styles.main}>
          <Sidebar />
          <div className={styles.content}>
            <Navbar validate={validate} location={location} />
            <Outlet />
          </div>
        </div>
      ) : (
        <>Error</>
      )}
    </>
  );
};

export default Panel;

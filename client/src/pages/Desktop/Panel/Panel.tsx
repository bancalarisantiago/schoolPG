//css
import styles from "./Panel.module.css";
import "../../../styles/theme.css";
//helper

//components
import Sidebar from "../../../components/Desktop/SideBar/Sidebar";
import { Outlet } from "react-router-dom";

const Panel: React.FC = () => {
  return (
    <div className={styles.main}>
      <Sidebar />
      {/* <Navbar /> */}
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;

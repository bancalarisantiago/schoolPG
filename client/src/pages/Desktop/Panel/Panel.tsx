//css
import styles from "./Panel.module.css";
import "../../../styles/theme.css";
//helper
import useHelper from "./useHelper";

//from modules
import { Outlet } from "react-router-dom";



//components
import Sidebar from "../../../components/Desktop/SideBar/Sidebar";
import Navbar from "../../../components/Desktop/Navbar/Navbar";



const Panel: React.FC = () => {
  const {} = useHelper();

  return (
    <div className={styles.main}>
      <Sidebar />



      <div className={styles.content}>
        <Navbar />
        <Outlet />
      </div>

    </div>
  );
};

export default Panel;

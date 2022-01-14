//css
import styles from "./Panel.module.css";
import "../../../styles/theme.css";
//helper

//components
import Sidebar from "../../../components/Desktop/SideBar/Sidebar";
import Navbar from "../../../components/Desktop/Navbar/Navbar";

const Panel: React.FC = () => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Panel;

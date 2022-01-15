//css
import styles from "./Panel.module.css";
import "../../../styles/theme.css";
//helper
import useHelper from "./useHelper";

//components
import Sidebar from "../../../components/Desktop/SideBar/Sidebar";

const Panel: React.FC = () => {
  const {} = useHelper();
  return (
    <div className={styles.main}>
      <Sidebar />

      <div className={styles.content}></div>
    </div>
  );
};

export default Panel;

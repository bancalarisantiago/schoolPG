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
  const { validate, location, showSidebar, handleShow } = useHelper();
  return (
    <>
      {validate.accessToken ? (
        <div className={styles.main}>
          <Sidebar showSidebar={showSidebar} />
          <div className={styles.content}>
            <Navbar
              validate={validate}
              location={location}
              handleShow={handleShow}
            />
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

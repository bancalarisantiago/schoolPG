//css
import styles from "./Navbar.module.css";
//from modules
import { NavLink } from "react-router-dom";
//assets
import menu from "../../../assets/menu (1).png";
//interfaces
import { IFullUser } from "../../../interfaces";

const Navbar: React.FC<{
  location: String;
  validate: IFullUser;
  handleShow: any;
}> = ({ validate, location, handleShow }) => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>
        {location.split("/").map((m: string, i: number) => {
          return i !== 0 ? (
            i < 3 ? (
              i === 1 ? (
                <p className={styles.route} key={i}>
                  {" "}
                  {m}{" "}
                </p>
              ) : (
                <p className={styles.reRoute} key={i}>
                  {" "}
                  {m}{" "}
                </p>
              )
            ) : (
              ""
            )
          ) : (
            ""
          );
        })}
      </div>

      <div className={styles.options}>
        {validate.user.picture ? (
          <NavLink to="/panel/profile">
            <img
              src={validate.user.picture}
              className={styles.pic}
              alt="profile"
            />
          </NavLink>
        ) : (
          <NavLink to="/panel/profile">
            <p className={styles.userprofile}> </p>
          </NavLink>
        )}
        <p className={styles.configs}></p>
        <img
          src={menu}
          alt="menu"
          className={styles.menu}
          onClick={handleShow}
        />
      </div>
    </div>
  );
};

export default Navbar;

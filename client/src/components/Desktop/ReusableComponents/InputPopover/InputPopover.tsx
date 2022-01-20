import styles from "./InputPopover.module.css";
import info from "../../../../assets/info.png";
import { StringMappingType } from "typescript";

const InputPopover: React.FC<{
  text: StringMappingType;
  handleClick: any;
  name: string;
}> = ({ text, handleClick, name }) => {
  return (
    <div className={styles.wrapper}>
      {/* <h2 className={styles.title}>Hover:me</h2> */}
      <img src={info} alt="userInfo" className={styles.title} />
      <div className={styles.content}>
        <p className={styles.message} onClick={() => handleClick(name, text)}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default InputPopover;

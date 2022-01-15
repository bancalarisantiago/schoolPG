import styles from "./Input.module.css";

interface IProps {
  name: string;
}

function Input({ name }: IProps) {
  return (
    <div className={styles.group}>
      <input type="text" required />
      <span className="highlight"></span>
      {/* <span className={styles.bar}></span> */}
      <label>{name}</label>
    </div>
  );
}

export default Input;

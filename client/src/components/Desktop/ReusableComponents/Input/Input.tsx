import styles from "./Input.module.css";

interface IProps {
  name: string;
}

function Input({ name }: IProps) {
  return (
    <div className={styles.group}>
      <input className={styles.input} type="text" required />
      <label className={styles.name}>{name}</label>
    </div>
  );
}

export default Input;

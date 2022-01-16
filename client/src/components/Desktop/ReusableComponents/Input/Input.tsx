import styles from "./Input.module.css";

interface IProps {
  text?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  type?: string;
}

function Input({ text, name, value, disabled = false, type }: IProps) {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        type={type ? type : "text"}
        required
        value={value}
        name={name}
      />
      <label className={`${styles.name} ${disabled ? styles.disabled : ""}`}>
        {text}
      </label>
    </div>
  );
}

export default Input;

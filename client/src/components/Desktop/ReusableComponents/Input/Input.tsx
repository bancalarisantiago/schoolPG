import styles from "./Input.module.css";

interface IProps {
  text?: string;
  name?: string;
  onChange?: any;
  placeholder?: string;
  autoComplete?: string;
  value?: any;
  disabled?: boolean;
  type?: string;
  addClass?: string;
}

function Input({
  text,
  name,
  autoComplete,
  value,
  placeholder,
  onChange,
  disabled = false,
  type,
}: IProps) {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        type={type ? type : "text"}
        name={name}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        required
        /*         defaultValue={value} */
      />
      <label className={`${styles.name} ${disabled ? styles.disabled : ""}`}>
        {placeholder}
      </label>
    </div>
  );
}

export default Input;

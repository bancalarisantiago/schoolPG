import styles from "./Button.module.css";

interface IProps {
  text?: string;
  disabled?: boolean;
}

function Button({ text, disabled }: IProps) {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
    >
      {text}
      <span className={styles.span}></span>
    </button>
  );
}

export default Button;

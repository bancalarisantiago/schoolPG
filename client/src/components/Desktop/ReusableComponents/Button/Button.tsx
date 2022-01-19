import styles from "./Button.module.css";

interface IProps {
  text: string;
  onSubmit?: any;
  onClick?: any;
  value?: any;
  disabled?: boolean;
}

function Button({ text, onSubmit, onClick, disabled }: IProps) {
  return (
    <button onSubmit={onSubmit} onClick={onClick} disabled={disabled} className={`${styles.button} ${disabled ? styles.disabled : ""}`}>
      {text}
      <span className={styles.span}></span>
    </button>
  );
}

export default Button;

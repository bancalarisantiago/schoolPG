import styles from "./Button.module.css";

interface IProps {
  text: string;
  onSubmit?: any;
  onClick?:any;
  value?:any
}

function Button({ text, onSubmit, onClick, value }: IProps) {
  return (
    <button className={styles.btn} onSubmit={onSubmit} onClick={onClick} value={value}>
      {text}
      <span></span>
    </button>
  );
}

export default Button;

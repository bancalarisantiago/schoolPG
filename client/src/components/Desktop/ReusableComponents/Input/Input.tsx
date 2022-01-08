//css
import styles from "./Input.module.css";

interface IProps {
  placeHolder: string;
  name: string;
  type?: string;
  xtraClass?: string;
}

export default function Input({ placeHolder, name, type, xtraClass }: IProps) {
  return (
    <div className={styles.main}>
      <input
        name={name}
        placeholder={placeHolder}
        autoComplete="off"
        type={type || "text"}
        className={styles.modernInput}
      />
    </div>
  );
}

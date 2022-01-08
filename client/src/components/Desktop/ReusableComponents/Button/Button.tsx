//css
import styles from "./Button.module.css";

interface IButton {
  content: string;
  xtraClass?: string;
}

export default function Button({ content, xtraClass }: IButton) {
  return (
    <div className={styles.componentBut}>
      <button className={styles.logbut}>{content}</button>
    </div>
  );
}

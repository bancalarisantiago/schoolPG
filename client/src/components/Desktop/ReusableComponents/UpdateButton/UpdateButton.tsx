import styles from "./UpdateButton.module.css";

const UpdateButton: React.FC<{ onClick: any; text: string }> = ({
  onClick,
  text,
}) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <span className={styles.span}>{text}</span>
    </button>
  );
};

export default UpdateButton;

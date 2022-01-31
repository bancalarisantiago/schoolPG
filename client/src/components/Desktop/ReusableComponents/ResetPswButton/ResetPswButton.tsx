import styles from "./ResetPswButton.module.css";

const ResetPswButton: React.FC<{ onClick: any }> = ({ onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Restablecer Contraseña
    </button>
  );
};

export default ResetPswButton;

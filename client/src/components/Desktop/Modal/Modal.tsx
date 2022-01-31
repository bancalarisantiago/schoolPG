import styles from "./Modal.module.css";

const Modal: React.FC<{ handleClose: any; show: any }> = ({
  handleClose,
  show,
  children,
}) => {
  const showHideClassName = show
    ? `${styles.modal} ${styles.displayBlock}`
    : `${styles.modal} ${styles.displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        {children}
        <button onClick={handleClose} type="button" className={styles.button}>
          Cerrar
        </button>
      </section>
    </div>
  );
};

export default Modal;

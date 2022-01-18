import styles from "./ButtonBack.module.css";

interface IButtonBack {
  onClick?: any;
}
const ButtonBack: React.FC<IButtonBack> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        <p> Atras</p>
      </button>
    </div>
  );
};

export default ButtonBack;

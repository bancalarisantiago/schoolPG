import styles from "./Input.module.css";

interface IProps {
  name: string;
  onChange?: any;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  disabled?: boolean;
  type?: string;
}

function Input({ name, autoComplete, value , placeholder, onChange}: IProps) {
  return (
    <div className={styles.group}>
      <input 
      className={styles.input} 
      name={name}
      type="text" 
      value={value} 
      autoComplete={autoComplete} 
      placeholder={placeholder}
      onChange={onChange} 
      required />
      <label className={styles.name}>{placeholder}</label>
    </div>
  );
}

export default Input;

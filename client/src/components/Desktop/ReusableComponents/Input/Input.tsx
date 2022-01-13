//css
import styles from "./Input.module.css";
//types
import { ICredential, ChangeEvent } from "../../../../interfaces";

interface IProps {
  placeHolder: string;
  name: string;
  handleChange(e: ChangeEvent): void;
  credential: ICredential;
  type?: string;
  xtraClass?: string;
}

export default function Input({
  placeHolder,
  name,
  type,
  credential,
  handleChange,
  xtraClass,
}: IProps) {
  const a = () => {
    if (name === "email") {
      return credential.email;
    } else if (name === "password") {
      return credential.password;
    }
  };
  return (
    <div className={styles.main}>
      <input
        name={name}
        placeholder={placeHolder}
        autoComplete="off"
        type={type || "text"}
        className={styles.modernInput}
        value={a()}
        onChange={handleChange}
      />
    </div>
  );
}

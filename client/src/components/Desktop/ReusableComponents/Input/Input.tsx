//css
import styles from "./Input.module.css";
//from modules
import { useState } from "react";
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
  const [show, setShow] = useState<boolean>(false);

  const a = () => {
    if (name === "email") {
      return credential.email;
    } else if (name === "password") {
      return credential.password;
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.cont}>
        <input
          name={name}
          placeholder={placeHolder}
          autoComplete="off"
          type={show ? "text" : type || "text"}
          className={styles.modernInput}
          value={a()}
          onChange={handleChange}
        />
        {type === "password" && (
          <label
            onClick={(e) => setShow(!show)}
            className={show ? styles.hide : styles.show}
          ></label>
        )}
      </div>
    </div>
  );
}

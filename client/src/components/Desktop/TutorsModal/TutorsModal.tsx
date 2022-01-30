import Input from "../ReusableComponents/Input/Input";
import { ITutor } from "../../../interfaces/index";
import styles from "./TutorsModal.module.css";

const TutorsModal: React.FC<{ tutors: any[]; onChange: any }> = ({
  tutors,
  onChange,
}) => {
  const contactsInput = [
    { name: "name", placeholder: "Nombre" },
    { name: "cellphone", placeholder: "Numero de Telefono" },
    { name: "email", placeholder: "Email" },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <div className={styles.contact1}>
          <p>Contacto 1</p>
          {contactsInput.map((e, i) => (
            <div className={styles.inputBox} key={i}>
              <Input
                placeholder={e.placeholder}
                name={`${e.name} 0`}
                onChange={onChange}
                autoComplete="off"
                value={tutors[0] && tutors[0][e.name] ? tutors[0][e.name] : ""}
              />
            </div>
          ))}
        </div>
        <div className={styles.contact2}>
          <p>Contacto 2</p>
          {contactsInput.map((e, i) => (
            <div className={styles.inputBox} key={i}>
              <Input
                placeholder={e.placeholder}
                name={`${e.name} 1`}
                onChange={onChange}
                autoComplete="off"
                value={tutors[1] && tutors[1][e.name] ? tutors[1][e.name] : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorsModal;

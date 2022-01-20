//css
import { useMemo, useState } from "react";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import styles from "./UpdateStudent.module.css";
import useHelper from "./useHelper";
import ButtonBack from "../../../components/Desktop/ReusableComponents/ButtonBack/ButtonBack";
import Database from "../../../components/Desktop/Database/Database";
import InputPopover from "../../../components/Desktop/ReusableComponents/InputPopover/InputPopover";
const UpdateStudent: React.FC = () => {
  const {
    inputFieldValues,
    handleChange,
    disabled,
    input,
    errors,
    getBack,
    userInfo,
    handleSubmit,
    handleClick,
  } = useHelper();

  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Actualizar Estudiante</p>
          <div className={styles.backbox}>
            <ButtonBack onClick={getBack} />
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputs}>
                {inputFieldValues.map((e, ind) => {
                  let userI = userInfo;
                  if (e.name === "first" || e.name === "last")
                    userI = userInfo.name;
                  else if (
                    e.name === "streetName" ||
                    e.name === "streetNumber" ||
                    e.name === "locality" ||
                    e.name === "postalCode"
                  )
                    userI = userInfo.location;

                  return (
                    <div key={ind}>
                      <div className={styles.inputAndPopover}>
                        <Input
                          type={e.type ? e.type : ""}
                          placeholder={e.text}
                          name={e.name}
                          onChange={handleChange}
                          autoComplete="off"
                          value={input[e.name]}
                        />

                        <InputPopover
                          text={userI ? userI[e.name] : ""}
                          handleClick={handleClick}
                          name={e.name}
                        />
                      </div>
                      {errors[e.name] && (
                        <p className={styles.errorsP}>{errors[e.name]}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <Button text="Actualizar Informacion" disabled={disabled} />
            </form>
          </div>
          {/* <div className={styles.infoCard}>
            <div className={styles.inputs}>
              {inputFieldValues.map((e, ind) => {
                let userI = userInfo;
                if (e.name === "first" || e.name === "last")
                  userI = userInfo.name;
                else if (
                  e.name === "streetName" ||
                  e.name === "streetNumber" ||
                  e.name === "locality" ||
                  e.name === "postalCode"
                )
                  userI = userInfo.location;

                return (
                  <Input
                    placeholder={e.text}
                    name={e.name}
                    disabled={true}
                    value={userI ? userI[e.name] : ""}
                  />
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;

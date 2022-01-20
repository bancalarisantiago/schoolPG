//css
import styles from "./UpdateComponent.module.css";

//from modules
import { useState } from "react";
//import { useMemo, useState } from "react";

//helper
import useHelper from "./useHelper";

//components
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import ButtonBack from "../../../components/Desktop/ReusableComponents/ButtonBack/ButtonBack";
import Database from "../../../components/Desktop/Database/Database";

const UpdateComponent: React.FC<{ userType: string; schoolType: string }> = ({
  userType,
  schoolType,
}) => {
  const {
    inputFieldValues,
    handleChange,
    disabled,
    input,
    errors,
    searching,
    getBack,
    school,
    updateUser,
    user,
    handleSubmit,
  } = useHelper();

  if (searching) {
    return (
      <Database
        school={school}
        userType={userType}
        schoolType={schoolType}
        updateUser={updateUser}
      />
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Actualizar {userType}</p>
          <div className={styles.backbox}>
            <ButtonBack onClick={getBack} />
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputs}>
                {inputFieldValues.map((e, ind) => {
                  return (
                    <div key={ind}>
                      <Input
                        type={e.type ? e.type : ""}
                        placeholder={e.text}
                        name={e.name}
                        onChange={handleChange}
                        autoComplete="off"
                        value={input[e.name]}
                      />
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
          <div className={styles.infoCard}>
            <div className={styles.inputs}>
              {inputFieldValues.map((e, ind) => {
                let userInfo = user;
                if (e.name === "first" || e.name === "last")
                  userInfo = user.name;
                else if (
                  e.name === "streetName" ||
                  e.name === "streetNumber" ||
                  e.name === "locality" ||
                  e.name === "postalCode"
                )
                  userInfo = user.location;

                return (
                  <Input
                    placeholder={e.text}
                    name={e.name}
                    disabled={true}
                    value={userInfo ? userInfo[e.name] : ""}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateComponent;

//css
import styles from "./UpdateComponent.module.css";

//helper
import useHelper from "./useHelper";

//components
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import ButtonBack from "../../../components/Desktop/ReusableComponents/ButtonBack/ButtonBack";
import InputPopover from "../../../components/Desktop/ReusableComponents/InputPopover/InputPopover";
import UserImg from "../../../assets/user.png";
import Modal from "../../../components/Desktop/Modal/Modal";
import UpdateButton from "../../../components/Desktop/ReusableComponents/UpdateButton/UpdateButton";
import ResetPswButton from "../../../components/Desktop/ReusableComponents/ResetPswButton/ResetPswButton";
import TutorsModal from "../../../components/Desktop/TutorsModal/TutorsModal";

const UpdateComponent: React.FC<{ userType: string }> = ({ userType }) => {
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
    showModal,
    hideModal,
    show,
    resetPsw,
    tutorsHandleChange,
  } = useHelper();

  // if (userType === "estudiantes") {
  return (
    <div className={styles.container}>
      <div className={styles.submain}>
        <div className={styles.titlebox}>
          <p className={styles.title}>Actualizar {userType}</p>
          <div className={styles.backbox}>
            <ButtonBack onClick={getBack} />
          </div>
        </div>

        {/* <div className={styles.formCard}> */}
        <form onSubmit={handleSubmit} className={styles.formCard}>
          <div className={styles.inputs}>
            <div className={styles.inputsLeft}>
              <div className={styles.pictureBox}>
                <img
                  className={styles.picture}
                  src={input.picture ? input.picture : UserImg}
                  alt="perfil de usuario"
                />
              </div>
              <div className={styles.inputPicture}>
                <div className={styles.inputAndPopover}>
                  <Input
                    placeholder="Foto"
                    name="picture"
                    onChange={handleChange}
                    autoComplete="off"
                    value={input.picture}
                  />
                  <InputPopover
                    text={userInfo.picture}
                    handleClick={handleClick}
                    name="picture"
                  />
                </div>
                {errors.picture && (
                  <p className={styles.errorsP}>{errors.picture}</p>
                )}
              </div>
              {userType === "estudiantes" ? (
                <div className={styles.tutorsModal}>
                  <Modal show={show} handleClose={hideModal}>
                    <TutorsModal
                      tutors={input.tutors}
                      onChange={tutorsHandleChange}
                    />
                  </Modal>
                  <UpdateButton onClick={showModal} text="Tutores" />
                  {/* <button type="button" onClick={showModal}>
                    Open
                  </button> */}
                </div>
              ) : userType === "profesores" ? (
                <div className={styles.tutorsModal}>
                  <Modal show={show} handleClose={hideModal}>
                    <p>Profesor</p>
                  </Modal>
                  <UpdateButton onClick={showModal} text="Materias" />
                  {/* <button type="button" onClick={showModal}>
                    Open
                  </button> */}
                </div>
              ) : (
                ""
              )}

              <div className={styles.resetPsw}>
                <ResetPswButton onClick={resetPsw} />
              </div>
            </div>
            <div className={styles.inputsRight}>
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
          </div>

          <Button text="Actualizar Informacion" disabled={disabled} />
        </form>
      </div>
    </div>
    // </div>
  );
  // } else {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.submain}>
  //         <div className={styles.titlebox}>
  //           <p className={styles.title}>Actualizar {userType}</p>
  //           <div className={styles.backbox}>
  //             <ButtonBack onClick={getBack} />
  //           </div>
  //         </div>
  //         <div className={styles.cards}>
  //           <div className={styles.formCard}>
  //             <form onSubmit={handleSubmit}>
  //               <div className={styles.inputs}>
  //                 {inputFieldValues.map((e, ind) => {
  //                   let userI = userInfo;
  //                   if (e.name === "first" || e.name === "last")
  //                     userI = userInfo.name;
  //                   else if (
  //                     e.name === "streetName" ||
  //                     e.name === "streetNumber" ||
  //                     e.name === "locality" ||
  //                     e.name === "postalCode"
  //                   )
  //                     userI = userInfo.location;
  //                   return (
  //                     <div key={ind}>
  //                       <div className={styles.inputAndPopover}>
  //                         <Input
  //                           type={e.type ? e.type : ""}
  //                           placeholder={e.text}
  //                           name={e.name}
  //                           onChange={handleChange}
  //                           autoComplete="off"
  //                           value={input[e.name]}
  //                         />
  //                         <InputPopover
  //                           text={userI ? userI[e.name] : ""}
  //                           handleClick={handleClick}
  //                           name={e.name}
  //                         />
  //                       </div>
  //                       {errors[e.name] && (
  //                         <p className={styles.errorsP}>{errors[e.name]}</p>
  //                       )}
  //                     </div>
  //                   );
  //                 })}
  //               </div>

  //               <Button text="Actualizar Informacion" disabled={disabled} />
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};

export default UpdateComponent;

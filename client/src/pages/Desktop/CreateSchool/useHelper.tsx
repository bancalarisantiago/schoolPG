//from modules
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//actions
import { createSchool } from "../../../redux/actions";

import {
  Location,
  Schools,
  ChangeEvent,
  SubmitEvent,
  IState,
} from "../../../interfaces/";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSession = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();

  useEffect(() => {
    if (userSession.user.school) navigate("/panel/general");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [location, setLocation] = useState<Location>({
    streetNumber: "",
    streetName: "",
    locality: "",
    postalCode: "",
  });
  const [input, setInput] = useState<Schools>({
    name: "",
    location: location,
    description: "",
    orientation: "",
    cellphone: "",
    phone: "",
    email: "",
    logo: "",
  });

  const handleInputChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e: ChangeEvent) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
    setInput({ ...input, location });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if (
      Object.values(input).includes("") ||
      Object.values(location).includes("")
    ) {
      return alert("Los campos no pueden estar vacios.");
    } else {
      dispatch(
        createSchool({
          createSchool: {
            ...input,
            userId: userSession.user._id,
          },
          accessToken: userSession.accessToken,
        })
      );
      if (
        window.confirm(
          `Para completar el registro debera loguearse nuevamente`
        ) === true
      ) {
        navigate("/login");
      }
    }
  };
  // $ npm install @emailjs/browser --save

  // init("user_zMyhB0L8PQmWO0uaVJjQO")

  // const handleSubmitMail = async (e: SubmitEvent) => {
  //     e.preventDefault();
  //         const form: any = {name: "NUEVO USUARIO ",
  //         from_name: "I SCHOOL APP",
  //     reply_to: "bancalarisantiago@gmail.com"};

  //    emailjs.send('service_zstwmji', "template_wutf4po", form )
  //    .then((result) => {
  //     console.log(result.text);
  // }, (error) => {
  //     console.log(error.text);
  // });

  return {
    handleChange,
    handleInputChange,
    handleSubmit,
    input,
    location,
  };
};

export default useHelper;

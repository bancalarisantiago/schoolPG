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
  const school = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();

  useEffect(() => {
    if (!school.id) navigate("/panel/general");
  }, []);

  const [location, setLocation] = useState<Location>({
    number: "",
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
    navigate("/panel/general");
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
    dispatch(createSchool(input));
  };
  return {
    handleChange,
    handleInputChange,
    handleSubmit,
    input,
    location,
  };
};

export default useHelper;

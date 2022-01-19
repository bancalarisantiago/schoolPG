import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../interfaces/index";

interface IUTeacherInputs {
  [key: string]: string;
  // name: string;
  // lastName: string;
  // userName: string;
  // password: string;
  // document: string;
  // email: string;
  // numberNumber: string;
  // streetName: string;
  // locality: string;
  // postalCode: string;
  // gender: string;
  // birthdate: string;
  // cellphone: string;
  // picture: string;
}
const inputFieldValues = [
  { text: "Nombre", name: "name" },
  { text: "Apellido", name: "lastName" },
  { text: "Nombre de Usuario", name: "userName" },
  { text: "Contraseña", name: "password" },
  { text: "DNI", type: "number", name: "document" },
  { text: "e-mail", name: "email" },
  { text: "Calle", name: "streetName" },
  { text: "Numero", type: "number", name: "streetNumber" },
  { text: "Localidad", name: "locality" },
  { text: "Codigo Postal", type: "number", name: "postalCode" },
  { text: "Genero", name: "gender" },
  { text: "Cumpleaños", type: "date", name: "birthdate" },
  { text: "Celular", type: "number", name: "cellphone" },
  { text: "Foto", name: "picture" },
];

const useHelper = () => {
  const school = useSelector((state: IState) => state.userSchool);
  const [user, setUser] = useState<any>({});
  const [input, setInput] = useState<IUTeacherInputs>({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    document: "",
    email: "",
    streetNumber: "",
    streetName: "",
    locality: "",
    postalCode: "",
    gender: "",
    birthdate: "1996-11-28",
    cellphone: "",
    picture: "",
  });
  const [searching, setSearching] = useState(true);
  const [errors, setErrors] = useState<IUTeacherInputs>({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    document: "",
    email: "",
    streetNumber: "",
    streetName: "",
    locality: "",
    postalCode: "",
    gender: "",
    birthdate: "",
    cellphone: "",
    picture: "",
  });
  const validate = (input: IUTeacherInputs, name: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dniPattern = /^\d{8}(?:[-\s]\d{4})?$/;
    console.log("error", errors[name]);

    switch (name) {
      case "name": {
        let name = "";
        if (!input.name) name = "Nombre es requerido.";
        else if (input.name.length < 3)
          name = "Nombre debe tener mas de 2 letras";
        return { ...errors, name };
      }
      case "lastName": {
        let lastName = "";
        if (!input[name]) lastName = "Apellido es requerido.";
        else if (input[name].length < 3)
          lastName = "Apellido debe tener mas de 2 letras";
        return { ...errors, lastName };
      }
      case "userName": {
        let userName = "";
        if (!input.userName) userName = "Nombre de usuario es requerido.";
        else if (!dniPattern.test(input.userName))
          userName = "Nombre de usuario no valido";
        return { ...errors, userName };
      }
      case "password": {
        let password = "";
        if (!input.password) password = "Contraseña es requerido.";
        else if (input.password.length < 8 || input.password.length > 15)
          password = "Contraseña debe tener entre 8 y 15 caracteres";
        return { ...errors, password };
      }
      case "document": {
        let document = "";
        if (!input.document) document = "DNI de usuario es requerido.";
        else if (!dniPattern.test(input.document))
          document = "DNI de usuario no valido";
        return { ...errors, document };
      }
      case "email": {
        let email = "";
        if (!input.email) email = "Email es requerido.";
        else if (!emailPattern.test(input.email)) email = "Email no valido";
        return { ...errors, email };
      }
      case "streetName": {
        let streetName = "";
        if (!input.streetName) streetName = "Calle es requerido.";
        return { ...errors, streetName };
      }
      case "streetNumber": {
        let streetNumber = "";
        if (!input.streetNumber) streetNumber = "Numero de calle es requerido.";
        return { ...errors, streetNumber };
      }
      case "locality": {
        let locality = "";
        if (!input.locality) locality = "Localidad es requerida.";
        return { ...errors, locality };
      }
      case "postalCode": {
        let postalCode = "";
        if (!input.postalCode) postalCode = "Codigo Postal es requerido.";
        return { ...errors, postalCode };
      }
      case "gender": {
        let gender = "";
        if (!input.gender) gender = "Numero de calle es requerido.";
        else if (input.gender !== "male" && input.gender !== "female")
          gender = "Genero no valido";
        return { ...errors, gender };
      }
      case "birthdate": {
        let birthdate = "";
        if (!input.birthdate) birthdate = "Nacimiento es requerido.";
        return { ...errors, birthdate };
      }
      case "cellphone": {
        let cellphone = "";
        if (!input.cellphone) cellphone = "Numero de celular es requerido.";
        else if (input.cellphone.length > 10)
          cellphone = "Numero de celular debe tener menos de 11 digitos";
        return { ...errors, cellphone };
      }
      case "picture": {
        let picture = "";
        if (!input.picture) picture = "Foto es requerida.";
        return { ...errors, picture };
      }
      default: {
        return errors;
      }
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log("type", typeof value);
    console.log("school", school);

    setErrors(validate({ ...input, [name]: value }, name));
  };

  let disabled = useMemo(() => {
    if (Object.keys(errors).find((e) => errors[e] !== "")) {
      return true;
    }
    if (Object.keys(input).find((e) => input[e].toString() === "")) return true;
    else return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const updateUser = (userinfo: any) => {
    console.log("update", userinfo);

    setSearching(false);
    setUser(userinfo);
  };
  return {
    inputFieldValues,
    handleChange,
    disabled,
    errors,
    searching,
    setSearching,
    input,
    school,
    updateUser,
    user,
  };
};

export default useHelper;

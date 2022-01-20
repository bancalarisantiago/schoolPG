import { userInfo } from "os";
import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState, IUserSubmit } from "../../../interfaces/index";
import { getSchoolById, getUsers, putUser } from "../../../redux/actions";

interface IUTeacherInputs {
  [key: string]: string;
}
const inputFieldValues = [
  { text: "Nombre", name: "first" },
  { text: "Apellido", name: "last" },
  { text: "Nombre de Usuario", name: "username" },
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

const voidInputs = {
  first: "",
  last: "",
  username: "",
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
};
const useHelper = () => {
  const school = useSelector((state: IState) => state.userSchool);
  const [user, setUser] = useState<any>({});
  const [input, setInput] = useState<IUTeacherInputs>(voidInputs);
  const [searching, setSearching] = useState(true);
  const [errors, setErrors] = useState<IUTeacherInputs>(voidInputs);
  const validate = (input: IUTeacherInputs, name: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dniPattern = /^\d{8}(?:[-\s]\d{4})?$/;
    console.log("error", errors[name]);

    switch (name) {
      case "first": {
        let first = "";
        if (!input.first) first = "Nombre es requerido.";
        else if (input.first.length < 3)
          first = "Nombre debe tener mas de 2 letras";
        return { ...errors, first };
      }
      case "last": {
        let last = "";
        if (!input[name]) last = "Apellido es requerido.";
        else if (input[name].length < 3)
          last = "Apellido debe tener mas de 2 letras";
        return { ...errors, last };
      }
      case "username": {
        let username = "";
        if (!input.username) username = "Nombre de usuario es requerido.";
        return { ...errors, username };
      }
      case "password": {
        let password = "";
        if (!input.password) password = "Contraseña es requerido.";
        // else if (input.password.length < 8 || input.password.length > 15)
        //   password = "Contraseña debe tener entre 8 y 15 caracteres";
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
        // else if (input.gender !== "male" && input.gender !== "female")
        //   gender = "Genero no valido";
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
        else if (input.cellphone.length > 14)
          cellphone = "Numero de celular debe tener menos de 15 digitos";
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
    console.log("value", typeof value, value);

    setInput({
      ...input,
      [name]: value,
    });
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
  const updateUser = (userInfo: any) => {
    setSearching(false);
    setUser(userInfo);
    setInput({
      first: userInfo.name ? userInfo.name.first : "",
      last: userInfo.name ? userInfo.name.last : "",
      username: userInfo.username || "",
      password: userInfo.password || "",
      document: userInfo.document || "",
      email: userInfo.email || "",
      streetNumber: userInfo.location ? userInfo.location.streetNumber : "",
      streetName: userInfo.location ? userInfo.location.streetName : "",
      locality: userInfo.location ? userInfo.location.locality : "",
      postalCode: userInfo.location ? userInfo.location.postalCode : "",
      gender: userInfo.gender || "",
      birthdate: userInfo.birthdate || "",
      cellphone: userInfo.cellphone || "",
      picture: userInfo.picture || "",
    });
  };
  const getBack = () => {
    setInput(voidInputs);
    setErrors(voidInputs);
    setSearching(true);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userSubmit: IUserSubmit = {
      user: {
        name: {
          first: input.first,
          last: input.last,
        },
        username: input.username,
        password: input.password,
        document: input.document,
        email: input.email,
        location: {
          streetNumber: input.streetNumber,
          streetName: input.streetName,
          locality: input.locality,
          postalCode: input.postalCode,
        },
        gender: input.gender,
        birthdate: input.birthdate,
        cellphone: input.cellphone,
        picture: input.picture,
      },
      id: user._id,
    };
    await dispatch(putUser(userSubmit));
    await dispatch(getSchoolById(user.school));
    console.log("user", user);
    console.log("userS", userSubmit);

    getBack();
  };
  return {
    inputFieldValues,
    handleChange,
    disabled,
    errors,
    searching,
    getBack,
    input,
    school,
    updateUser,
    user,
    handleSubmit,
  };
};

export default useHelper;

//from modules

import { EventInput } from "@fullcalendar/react";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IState, IUserSubmit } from "../../../interfaces/index";
import { getSchoolById, putUser, getUserById } from "../../../redux/actions";

interface IUTeacherInputs {
  [key: string]: string;
}
const inputFieldValues = [
  { text: "Nombre", name: "first" },
  { text: "Apellido", name: "last" },
  { text: "Nombre de Usuario", name: "username" },
  // { text: "Contraseña", name: "password" },
  { text: "DNI", type: "number", name: "document" },
  { text: "e-mail", name: "email" },
  { text: "Celular", type: "number", name: "cellphone" },
  { text: "Calle", name: "streetName" },
  { text: "Numero", type: "number", name: "streetNumber" },
  { text: "Localidad", name: "locality" },
  { text: "Codigo Postal", type: "number", name: "postalCode" },
  { text: "Genero", name: "gender" },
  { text: "Cumpleaños", type: "date", name: "birthdate" },
  // { text: "Foto", name: "picture" },
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const school = useSelector((state: IState) => state.userSchool);
  const userInfo = useSelector((state: IState) => state.userDetail);
  const userSession = useSelector((state: IState) => state.userSession);
  const [input, setInput] = useState<any>({ ...voidInputs, tutors: [] });
  const [errors, setErrors] = useState<any>(voidInputs);
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState({
    courses: userInfo.course,
    subject: userInfo.subject,
  });

  useEffect(() => {
    dispatch(getUserById({ userId: id, accessToken: userSession.accessToken }));
    /* setSelect({
      subject: [],
      courses: [],
    }); */
  }, [dispatch, id, userSession.accessToken]);
  useEffect(() => {
    let tutors = [
      { name: "", cellphone: "", email: "" },
      { name: "", cellphone: "", email: "" },
    ];
    if (userInfo.tutors && userInfo.tutors[1] && userInfo.tutors[0])
      tutors = [...userInfo.tutors];
    if (userInfo.tutors && !userInfo.tutors[1] && userInfo.tutors[0])
      tutors = [
        { ...userInfo.tutors[0] },
        { name: "", cellphone: "", email: "" },
      ];
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
      tutors: tutors,
    });
  }, [userInfo]);

  const validate = (input: IUTeacherInputs, name: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dniPattern = /^\d{8}(?:[-\s]\d{4})?$/;

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
      // case "streetName": {
      //   let streetName = "";
      //   if (!input.streetName) streetName = "Calle es requerido.";
      //   return { ...errors, streetName };
      // }
      // case "streetNumber": {
      //   let streetNumber = "";
      //   if (!input.streetNumber) streetNumber = "Numero de calle es requerido.";
      //   return { ...errors, streetNumber };
      // }
      // case "locality": {
      //   let locality = "";
      //   if (!input.locality) locality = "Localidad es requerida.";
      //   return { ...errors, locality };
      // }
      // case "postalCode": {
      //   let postalCode = "";
      //   if (!input.postalCode) postalCode = "Codigo Postal es requerido.";
      //   return { ...errors, postalCode };
      // }
      // case "gender": {
      //   let gender = "";
      //   if (!input.gender) gender = "Genero es requerido.";
      //   return { ...errors, gender };
      // }
      // case "birthdate": {
      //   let birthdate = "";
      //   if (!input.birthdate) birthdate = "Nacimiento es requerido.";
      //   return { ...errors, birthdate };
      // }
      // case "cellphone": {
      //   let cellphone = "";
      //   if (!input.cellphone) cellphone = "Numero de celular es requerido.";
      //   else if (input.cellphone.length > 14)
      //     cellphone = "Numero de celular debe tener menos de 15 digitos";
      //   return { ...errors, cellphone };
      // }
      // case "picture": {
      //   let picture = "";
      //   if (!input.picture) picture = "Foto es requerida.";
      //   return { ...errors, picture };
      // }
      default: {
        return errors;
      }
    }
  };

  function handleInputOnChangeList(event: any) {
    const { name, value } = event.target;

    if (name === "courses") {
      if (!select.courses.map((m: any) => m.name === value).includes(true)) {
        select.courses.push(
          school.courses.filter((m: any) => m.name === value)
        );
      } else {
        alert("El curso ya esta seleccionado");
      }
    }
    if (name === "subjects") {
      if (!select.subject.map((m: any) => m.name === value).includes(true)) {
        select.subject.push(
          school.subjects.filter((m: any) => m.name === value)
        );
      } else {
        alert("La materia ya esta seleccionada");
      }
    }
    setSelect({
      ...select,
      subject: select.subject.flat(),
      courses: select.courses.flat(),
    });
    event.target.value = "default";
  }

  function deleteFromList(event: any) {
    if (
      select.courses
        .map((m: any) => m.name === event.target.value)
        .includes(true)
    ) {
      let copy = select.courses.filter(
        (p: any) => p.name !== event.target.value
      );
      setSelect({ ...select, courses: copy });
    }
    if (
      select.subject
        .map((m: any) => m.name === event.target.value)
        .includes(true)
    ) {
      let copy = select.subject.filter(
        (g: any) => g.name !== event.target.value
      );
      setSelect({ ...select, subject: copy });
    }
  }
  const handleChange = (e: EventInput) => {
    const { name, value } = e.target;

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
    // if (Object.keys(input).find((e) => input[e].toString() === "")) return true;
    else return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const getBack = () => {
    // setInput(voidInputs);
    // setErrors(voidInputs);
    // eslint-disable-next-line no-restricted-globals
    history.go(-1);
  };

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
        tutors: input.tutors,
        course: select.courses,
        subject: select.subject,
      },
      id: userInfo._id,
    };
    dispatch(
      putUser({ updateUser: userSubmit, accessToken: userSession.accessToken })
    );

    dispatch(
      getSchoolById({
        schoolId: userInfo.school._id,
        accessToken: userSession.accessToken,
      })
    );
    alert("El usuario fue modificado correctamente");
    setSelect({
      subject: [],
      courses: [],
    });
    getBack();
  };

  const handleClick = (name: string, text: string) => {
    setInput({ ...input, [name]: text });
    setErrors(validate({ ...input, [name]: text }, name));
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const resetPsw = () => {
    if (input.document) {
      setInput({ ...input, password: input.document });
      alert(
        `La contraseña fue restablecida al DNI, ${input.document}, confirme los cambios`
      );
    } else {
      alert("Debe ingresar el DNI para restablecer la contraseña");
    }
  };

  const tutorsHandleChange = (e: EventInput) => {
    const { name, value } = e.target;

    const [nameN, pos] = name.split(" ");

    setInput({
      ...input,
      tutors: input.tutors.map((e: any, i: number) =>
        i.toString() === pos ? { ...e, [nameN]: value } : e
      ),
      // tutors: [input.tutors[0], { ...input.tutors[pos], [nameN]: value }],
    });
    // if (pos === 1) {
    //   setInput({
    //     ...input,
    //     tutors: input.tutors.map((e: any, i: number) =>
    //       i.toString() === pos ? { ...e, [nameN]: value } : e
    //     ),
    //     // tutors: [input.tutors[0], { ...input.tutors[pos], [nameN]: value }],
    //   });
    // } else {
    //   setInput({
    //     ...input,
    //     tutors: input.tutors.map((e: any, i: number) =>
    //       i.toString() === pos ? { ...e, [nameN]: value } : e
    //     ),
    //     // tutors: [{ ...input.tutors[pos], [nameN]: value }, input.tutors[1]],
    //   });
    // }
    // setErrors(validate({ ...input, [name]: value }, name));
  };
  return {
    inputFieldValues,
    handleChange,
    disabled,
    errors,
    getBack,
    input,
    school,
    userInfo,
    handleSubmit,
    handleClick,
    show,
    hideModal,
    showModal,
    resetPsw,
    tutorsHandleChange,
    select,
    deleteFromList,
    handleInputOnChangeList,
  };
};

export default useHelper;

import { useState , useEffect} from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {Location, Schools, ChangeEvent, SubmitEvent, IState} from "../../../interfaces/"


const useHelper = () => {
    const school = useSelector((state: IState) => state.userSession);
    const navigate = useNavigate();

//   useEffect(() => {
//     if (!school.id) navigate("/panel/general");
//   }, []);
    

    const [location, setLocation] = useState<Location>({
        number: 0,
        streetName: "",
        locality: "",
        postalCode: ""
    })
    const [input, setInput] = useState<Schools>({
        name: "",
        location: location,
        description: "",
        orientation: "",
        cellphone: "",
        phone: "",
        email: "",
        logo: ""
    });


    const handleInputChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

    }

    const handleChange = (e: ChangeEvent) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value
        })
        setInput({ ...input, location })
    }


    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
       const newSchool = await axios.post("http://localhost:5000/api/school", input)

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
        location
    }
}

export default useHelper
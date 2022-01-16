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
    return {
        handleChange,
        handleInputChange,
        handleSubmit,
        input,
        location
    }
}

export default useHelper
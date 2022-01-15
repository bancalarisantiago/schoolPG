import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Form.module.css";
import swal from "sweetalert";
import Button from "../../../components/Desktop/ReusableComponents/LoginButton/Button";


type SubmitEvent = React.SyntheticEvent;
type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;


interface Location {
    number: number;
    streetName: string;
    locality: string;
    postalCode: string;
}


interface Schools {
    name: string;
    location: Location;
    description: string;
    orientation: string;
    logo: string;
    email: string;
    phone: string;
    cellphone: string
}


export default function Admin(): JSX.Element {
    const navigate = useNavigate();
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

    console.log(input)

    const handleInputChange = (e: ChangeEvent): void => {
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

    const alert = async () => {
        try {
            const message = await swal({
                title: "Escuela creada correctamente!",
                text: "Ahora podras verla en el Panel"
            });
            if (message) {
                navigate("/panel");
            } else {
                navigate(0);
            }
        } catch (err) {
            console.log(err);
        }
    };


    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        axios
            .post(`/school`, input)
            .then((esch) => {
                alert();
                console.log(esch)

                navigate("/admin", { replace: true })
            })
            .catch((error) => {
                alert()
                navigate(0)
            });
    };

    return (
        <div className={styles.main}>
            <form onSubmit={handleSubmit}>
                <Link to="/">
                    Volver
                </Link>
                <h2>WELCOME</h2>
                <div>
                    <label className={styles.inputNames} htmlFor="name">
                        Nombre:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        autoFocus
                        name="name"
                        id="name"
                        value={input.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={styles.inputNames} htmlFor="number">
                        Number:{" "}
                    </label>
                    <input
                        type="number"
                        placeholder="numero"
                        name="number"
                        id="number"
                        value={location.number}
                        onChange={handleChange}
                    />
                    <label className={styles.inputNames} htmlFor="streeName">
                        StreeName:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="streetName"
                        name="streetName"
                        id="streetName"
                        value={location.streetName}
                        onChange={handleChange}
                    />
                    <label className={styles.inputNames} htmlFor="postal">
                        postal:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="codigo postal"
                        name="postalCode"
                        id="postalCode"
                        value={location.postalCode}
                        onChange={handleChange}
                    />
                    <label className={styles.inputNames} htmlFor="locality">
                        Locality:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="locality"
                        name="locality"
                        id="locality"
                        value={location.locality}
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <label className={styles.inputNames} htmlFor="orientation">
                        Orientation:{" "}
                    </label>
                    <textarea
                        placeholder="orientation"
                        name="orientation"
                        id="orientation"
                        value={input.orientation}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={styles.inputNames} htmlFor=" description">
                        Description:{" "}
                    </label>
                    <textarea
                        placeholder="description"
                        name="description"
                        id="description"
                        value={input.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={styles.inputNames} htmlFor="email">
                        Email:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        id="email"
                        value={input.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={styles.inputNames} htmlFor="phone">
                        Phone:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="phone"
                        name="phone"
                        id="phone"
                        value={input.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={styles.inputNames} htmlFor="cellphone">
                        Cellphone:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="cellphone"
                        name="cellphone"
                        id="cellphone"
                        value={input.cellphone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={styles.inputNames} htmlFor="logo">
                        Logo:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="logo"
                        name="logo"
                        id="logo"
                        value={input.logo}
                        onChange={handleInputChange}
                    />
                </div>
                <Button content={"CreateSchool"}/>
            </form>
        </div>
    );
}

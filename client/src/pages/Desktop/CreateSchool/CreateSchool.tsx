//components
import Input from "../../../components/Desktop/ReusableComponents/Input/Input";
import Button from "../../../components/Desktop/ReusableComponents/Button/Button";

import { Link } from "react-router-dom";
import useHelper from "./useHelper"
import styles from "./CreateSchool.module.css";



const CreateSchool: React.FC = () => {
   
  const {
    handleChange,
    handleInputChange,
    handleSubmit,
    input,
    location
} = useHelper()

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
                <Button text={"CreateSchool"}/>
            </form>
        </div>
    );
}

export default CreateSchool




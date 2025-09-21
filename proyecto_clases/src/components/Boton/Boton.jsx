import React from "react";
import "./Boton.css";

const Boton = () => {
    const handleClick = () => {
        alert("Botón clickeado!");
    };
    return (
        <>
            <button className="boton" onClick={handleClick}>
                Click Me
            </button>
        </>
    );
};

export default Boton;

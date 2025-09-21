import React from "react";
import Boton from "../Boton/Boton";
import Estudiante from "../Estudiante/Estudiante";

const estudiantes = [
    { id: 1, nombre: "Andrea", edad: 20 },
    { id: 2, nombre: "María", edad: 22 },
    { id: 3, nombre: "Jenny", edad: 21 },
];

const Main = () => {
    return (
        <>
            <Boton />
            <Estudiante estudiantes={estudiantes} />
        </>
    );
};

export default Main;

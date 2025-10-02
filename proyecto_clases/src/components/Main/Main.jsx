import React from "react";
import Boton from "../Boton/Boton";
import Estudiante from "../Estudiante/Estudiante";
import Gallery from "../Gallery/Gallery";
import { estudiantes, images } from "../../utils/listas";

const Main = () => {
    return (
        <>
            <Estudiante estudiantes={estudiantes} />
            <Gallery images={images} />
            <Boton />
        </>
    );
};

export default Main;

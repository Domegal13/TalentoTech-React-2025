import React from "react";
import Boton from "../Boton/Boton";
import Estudiante from "../Estudiante/Estudiante";
import Gallery from "../Gallery/Gallery";
import Productos from "../Producto/Producto";
import { estudiantes, images } from "../../utils/listas";

const Main = () => {
    return (
        <>
            <Estudiante estudiantes={estudiantes} />
            {/* <Gallery images={images} /> */}
            <Productos />
            <Boton />
        </>
    );
};

export default Main;

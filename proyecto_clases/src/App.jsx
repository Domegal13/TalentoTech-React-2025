import "./App.css";
import Boton from "./components/Boton/Boton";
import Estudiante from "./components/Estudiante/Estudiante";
import Footer from "./components/Footer/Footer";

const estudiantes = [
    { id: 1, nombre: "Juan", edad: 20 },
    { id: 2, nombre: "María", edad: 22 },
    { id: 3, nombre: "Pedro", edad: 21 },
];

function App() {
    return (
        <>
            <h1>Bienvenido a mi Aplicación</h1>
            <p>Esta es una App de ejemplo utilizando Vite y React</p>
            <Boton />
            <Estudiante estudiantes={estudiantes} />
            <Footer />
        </>
    );
}

export default App;

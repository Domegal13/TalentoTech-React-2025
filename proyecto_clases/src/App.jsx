import "./App.css";
// import Boton from "./components/Boton/Boton";
// import Estudiante from "./components/Estudiante/Estudiante";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

// const estudiantes = [
//     { id: 1, nombre: "Juan", edad: 20 },
//     { id: 2, nombre: "María", edad: 22 },
//     { id: 3, nombre: "Pedro", edad: 21 },
// ];

function App() {
    return (
        <>
            <h1>Bienvenido a mi Aplicación</h1>
            <p>Esta es una App de ejemplo utilizando Vite y React</p>
            <Main />
            <Footer />
        </>
    );
}

export default App;

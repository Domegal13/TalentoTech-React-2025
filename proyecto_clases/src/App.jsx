import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";
import Inicio from "./components/Inicio/Inicio";
import Contacto from "./components/Contacto/Contacto";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path={"/contacto"} element={<Contacto />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

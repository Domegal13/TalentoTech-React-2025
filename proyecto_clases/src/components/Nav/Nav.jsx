import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to="#">Acerca de</Link>
                </li>
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

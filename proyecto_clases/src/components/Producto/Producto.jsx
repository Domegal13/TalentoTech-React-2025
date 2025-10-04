import { useState, useEffect } from "react";

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    const url = "https://68e193598943bf6bb3c4829d.mockapi.io/productos";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducto(data);
                setCargando(false);
            })
            .catch((error) => {
                setError("Error al cargar Productos");
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando Productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h2>Productos</h2>
            <div className="container">
                {producto.map((producto) => (
                    <div className="card" key={producto.id}>
                        <h3> {producto.nombre} </h3>
                        <h2>${producto.precio}</h2>
                        {/* <img src={producto.image} alt={producto.name} /> */}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Producto;

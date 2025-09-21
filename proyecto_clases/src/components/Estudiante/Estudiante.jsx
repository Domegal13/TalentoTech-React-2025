import "./Estudiante.css";
// const estudiantes = () => {
//     return [
//         { id: 1, nombre: "Juan", edad: 20 },
//         { id: 2, nombre: "María", edad: 22 },
//         { id: 3, nombre: "Pedro", edad: 21 },
//     ];
// };

const Estudiante = ({ estudiantes }) => {
    return (
        <>
            <h1>Lista de Estudiantes</h1>
            <section className="container-estudiantes">
                {estudiantes.map((est) => (
                    <div className="card-estudiante" key={est.id}>
                        <h3>
                            {est.nombre} - Edad: {est.edad}
                        </h3>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Estudiante;

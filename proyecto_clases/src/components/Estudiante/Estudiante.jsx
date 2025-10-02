import "./Estudiante.css";

const Estudiante = ({ estudiantes }) => {
    return (
        <>
            <h2>Lista de Estudiantes</h2>
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

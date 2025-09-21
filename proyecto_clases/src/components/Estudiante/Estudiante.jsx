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
            {estudiantes.map((est) => (
                <div key={est.id}>
                    <h3>
                        {est.nombre} - Edad: {est.edad}
                    </h3>
                </div>
            ))}
        </>
    );
};

export default Estudiante;

import "./Gallery.css";

const Gallery = ({ images }) => {
    return (
        <section>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
        </section>
    );
};

export default Gallery;

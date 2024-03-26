import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { Card, Col } from "react-bootstrap";

const Favorites = () => {
  const { data } = useContext(MyContext); // consumimos la variable global

  const PhotosFavoritas = data.photos.filter((photos) => photos.liked); // aca recorremos todo la galeria y seleccionamos solo los que contengan el Key liked = true
  console.log("Este es Data..:", data);
  console.log("Este es fotos F..:", PhotosFavoritas);

  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-4 p-3">
        {PhotosFavoritas.map(
          (
            photos,
            index // Mapeamos y mostramos los que contiene Like True
          ) => (
            <Col key={index}>
              <Card>
                <div>
                  <Card.Img src={photos.src.tiny}></Card.Img>
                  <Card.Body>
                    <Card.Title>{photos.alt}</Card.Title>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          )
        )}
      </div>
    </>
  );
};
export default Favorites;

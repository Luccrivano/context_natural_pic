import React from 'react';
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import { Card, Col } from 'react-bootstrap';

const Gallery = () => {
  const { data, setData } = useContext(MyContext) // pasamos los estados globales

  const handleClick = (index) => {  // Funcion que se gatilla cuando se pincha una imagen y trae como parametro el index 
  //console.log("paso por aca")  
  const DataFavorito= data.photos.map((photos, cont) =>{  // recorremos todo el objeto data con su valor indice (cont)
    if (cont === index){ // si coiciden es porque fue seleccionada
        return{ ... photos, liked: !photos.liked} // invierte el valor de Liked (true)
    }
    else{
      return photos // de lo contrario deja el valor de origen
    }
  }
  ) 
  setData({ ...data, photos: DataFavorito})  // Guardamos los valores modificados
}
  return (
      <div className="gallery grid-columns-4 p-3">
        {data.photos.map((photo, index) => (
         <Col key={photo.id}>
          <Card>
            <div>
            <Card.Img onClick={()=>handleClick(index)} key={index} variant="top" src={photo.src.small} alt={`photo ${index}`} />  {/*// mostramos todos los fotos almacenada en data */}
            <Card.Body>
              <Card.Title>{photo.alt}</Card.Title>
              <Card.Text>
                 {photo.liked ? <p>❤</p>:<p></p>} {/* Si el valor de liked es true muestra el corazon  de lo contrario no muesttra nada*/}
              </Card.Text>
            </Card.Body>
            </div>
          </Card>
        </Col>
   
        ))}
        </div>
        )
          };

export default Gallery;

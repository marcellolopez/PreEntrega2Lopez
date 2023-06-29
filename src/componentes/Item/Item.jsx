/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, artista, album, precio, img }) => {
  const formato_precio = precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });
  return (
    <div className="cardContainer">
      <img className="img" src={img} alt={artista} />
      <h3 className="artist-name m-0"> {artista} </h3>
      <h4 className="album-name m-0"> {album} </h4>
      <p className="product-price m-0"> {formato_precio} </p>
      <Link className="btn-white" to={`/item/${id}`} > 
      Ver Producto
      </Link> 
   
      <button className="btn-black">COMPRAR</button>
    </div>
  );
};

export default Item;

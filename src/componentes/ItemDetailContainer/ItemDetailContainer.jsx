import { useState, useEffect } from "react";
import { getUnproducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { idItem } = useParams();

  useEffect(() => {
    getUnproducto(idItem)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error))
  }, [idItem]);
  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;

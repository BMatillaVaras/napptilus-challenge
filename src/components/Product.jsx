import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/product.scss';

const Product = (props) => {
    return ( 
        <div className="productCard">
            <img alt="Imagen del producto" src={props.image} className="productCard--img"/>
            <div className="productCard--details">
                <h3 className="productCard--details__brand">Marca: {props.brand}</h3>
                <p className="productCard--details__model">Modelo: {props.model}</p>
                <p className="productCard--details__price">Precio: {props.price}</p>
                <Link to={`product/${props.id}`} className="productCard--details__button">Ver detalles</Link>
            </div>
            
        </div>
     );
}
 
export default Product;
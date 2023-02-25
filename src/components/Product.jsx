import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/product.scss';

const Product = (props) => {
    return ( 
        <div className="productCard">
            <img alt="Imagen del producto" src={props.image}/>
            <div>
                <h3>Marca: {props.brand}</h3>
                <h4>Precio: {props.price}</h4>
                <p>Modelo: {props.model}</p>
                <Link to={`product/${props.id}`}>Ver detalles:</Link>
            </div>
            
        </div>
     );
}
 
export default Product;
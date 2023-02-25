import React from "react";
import Product from "./Product";

const ProductList = (props) => {

    console.log(props.products);

    const renderProducts = props.products.map((product) => {
        return (
            <li key={product.key} className="product">
                <Product image={product.imgUrl} model={product.model} brand={product.brand} price={product.price} id={product.id}/>
            </li>
        )
    })

    return ( 
            <ul>
                {renderProducts}
            </ul>
    );
}
 
export default ProductList;
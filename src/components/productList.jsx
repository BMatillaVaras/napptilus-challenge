import React from "react";
import Product from "./Product";
import '../stylesheet/productList.scss';

const ProductList = (props) => {

    const renderProducts = props.products.map((product) => {
        return (
            <li key={product.id} className="list--product">
                <Product image={product.imgUrl} model={product.model} brand={product.brand} price={product.price} id={product.id}/>
            </li>
        )
    })

    return ( 
            <ul className="list">
                {renderProducts}
            </ul>
    );
}
 
export default ProductList;
import React from "react";
import ProductList from "./productList";

const ProductsView = (props) => {
    return (
        <div>
            <h1>Productos:</h1>
			<ProductList products={props.products}/>
        </div>
    )
}

export default ProductsView;
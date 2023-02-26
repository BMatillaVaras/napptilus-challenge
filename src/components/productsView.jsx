import React from "react";
import ProductList from "./productList";

const ProductsView = ({products, search, setSearch}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <section>
        <div>
            <h1>Productos:</h1>
            <div>
                <label for="search">Busca por marca o modelo</label>
                <input name="search" onChange={handleSearch} value={search} placeholder="Introduce tu búsqueda"></input>
            </div>
            
        </div>
            
			<ProductList products={products}/>
        </section>
    )
}

export default ProductsView;
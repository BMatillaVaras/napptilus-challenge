import React from "react";
import NoResults from "./general/noResults";
import ProductList from "./productList";

const ProductsView = ({products, search, setSearch, noResults}) => {

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
            {noResults ? <NoResults/> : <ProductList products={products}/>}
			
        </section>
    )
}

export default ProductsView;
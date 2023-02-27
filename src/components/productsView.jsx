import React from "react";
import NoResults from "./general/noResults";
import ProductList from "./productList";
import "../stylesheet/productsView.scss";

const ProductsView = ({products, search, setSearch, noResults}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <section className="section">
            <div className="section--header">
                <h1 className="section--header__title">Productos:</h1>
                <div className="section--header__search">
                    <label htmlFor="search" className="search--label">Busca por marca o modelo</label>
                    <input name="search" onChange={handleSearch} value={search} placeholder="Introduce tu búsqueda" className="search--input"></input>
                </div>
                
            </div>
            <article className="section--article">
                {noResults ? <NoResults/> : <ProductList products={products}/>}
            </article>
            
			
        </section>
    )
}

export default ProductsView;
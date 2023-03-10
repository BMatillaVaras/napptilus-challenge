import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getProducts } from "./services/api";
import ProductsView from "./components/productsView";
import ProductDetail from "./components/ProductDetail";
import Loader from "./components/general/loader";
import Header from "./components/general/header";
import { getLocalStorage } from "./services/localStorage";
import "./App.scss";

function App() {
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    const productsStorage = getLocalStorage("productsList");
    if (productsStorage) {
      setProductList(productsStorage);
      setLoading(false);
    } else {
      getProducts().then((data) => {
        setProductList(data);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    setCurrentPage("catalogue");
  }, []);

  const termToFilter = search.toLowerCase().trim();

  const filteredList =
    productList &&
    productList.filter((product) => {
      const brand = product.brand.toLowerCase().trim();
      const model = product.model.toLowerCase().trim();
      return brand.includes(termToFilter) || model.includes(termToFilter);
    });

  const noResults = search !== "" && filteredList.length === 0;

  const renderProducts = search !== "" ? filteredList : productList;

  return (
    <div className='app'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header
            productCount={productCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <ProductsView
                  products={renderProducts}
                  search={search}
                  setSearch={setSearch}
                  noResults={noResults}
                />
              }
            />
            <Route
              path='product/:id'
              element={
                <ProductDetail
                  setProductCount={setProductCount}
                  setCurrentPage={setCurrentPage}
                  productCount={productCount}
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

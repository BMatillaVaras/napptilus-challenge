import React, {useState, useEffect} from 'react';
import { getProducts } from './services/api';
import ProductsView from './components/productsView';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {

  const [productList, setProductList] = useState();

  useEffect(() => {
    getProducts().then((data) => {
      setProductList(data);
    });
  }, []);

  return (
    <div className="app">
      <h1>Listado de productos:</h1>
      <Routes>
        <Route exact path="/" element={<ProductsView products={productList}/>}/>
        <Route path="product/:id" element={<ProductDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

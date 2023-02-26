import React, {useState, useEffect} from 'react';
import { getProducts } from './services/api';
import ProductsView from './components/productsView';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import { EXPIRE_TIME } from './utils/constants';
import Loader from './components/general/loader';

function App() {

  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState();

  useEffect(() => {
      getProducts().then((data) => {
        setProductList(data);
        setLoading(false);
      });
      
  }, []);

  return (
    <div className="app">
      {loading ? <Loader/> : 
      <>
        <Routes>
          <Route exact path="/" element={<ProductsView products={productList}/>}/>
          <Route path="product/:id" element={<ProductDetail setProductCount={setProductCount}/>}/>
        </Routes>
      </>
      
      }
    </div>
  );
}

export default App;

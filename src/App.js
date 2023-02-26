import React, {useState, useEffect} from 'react';
import { getProducts } from './services/api';
import ProductsView from './components/productsView';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import { EXPIRE_TIME } from './utils/constants';
import Loader from './components/general/loader';
import Header from './components/general/header';

function App() {

  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(0);
  const [search, setSearch]  = useState("");

  useEffect(() => {
      getProducts().then((data) => {
        setProductList(data);
        setLoading(false);
      });
      
  }, []);

const termToFilter = search.toLowerCase().trim();

const filteredList = productList && productList.filter((product) => {
    const brand = product.brand.toLowerCase().trim();
    const model = product.model.toLowerCase().trim();
    return (brand.includes(termToFilter) || model.includes(termToFilter))
});

  return (
    <div className="app">
      {loading ? <Loader/> : 
      <>
      <Header productCount={productCount}/>
        <Routes>
          <Route exact path="/" element={<ProductsView products={search.length < 1 ? productList : filteredList} search={search} setSearch={setSearch}/>}/>
          <Route path="product/:id" element={<ProductDetail setProductCount={setProductCount}/>}/>
        </Routes>
      </>
      
      }
    </div>
  );
}

export default App;

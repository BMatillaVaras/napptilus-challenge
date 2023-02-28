import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail, postAddCart } from "../services/api";
import { getLocalStorage } from "../services/localStorage";
import '../stylesheet/product.scss';
import Loader from "./general/loader";
import '../stylesheet/productDetail.scss';

const ProductDetail = ({setProductCount, setCurrentPage, productCount }) => {

    const params = useParams(); 
    
    const [details, setDetails] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedStorage, setSelectedStorage] = useState();
    

    useEffect(() => {
        const detailsStorage = getLocalStorage(`productDetail_${params.id}`);
        if(detailsStorage) {
          setDetails(detailsStorage);
          setLoading(false);
        } else {
          getProductDetail(params.id).then((data) => {
            setDetails(data);
            setLoading(false);
          });
        }
    }, [params.id]);

    useEffect(() => {
        setCurrentPage("detail");
    }, []);

    const handleColorsChange = (e) => {
      setSelectedColor(e.target.value);
    }

    const handleStorageChange = (e) => {
      setSelectedStorage(e.target.value);
    }

    const submitData = () => {
      const productSelected = {
        id: params.id,
        colorCode: details.options.colors.length === 1 ? Number(details.options.colors[0].code) : Number(selectedColor),
        storageCode: details.options.storages.length === 1 ? Number(details.options.storages[0].code) : Number(selectedStorage)
      }
      postAddCart(productSelected).then((data) => {
        const numberOfProducts = productCount + data.count;
        setProductCount(numberOfProducts);
      });
    }

    return ( 
      <>
        {loading ? <Loader/> : 
        <article className="productDetails">
          <div className="productDetails--header">
            <h2 className="productDetails--header__title">Características</h2>
            <Link to="/" onClick={() => setCurrentPage("catalogue")} className="productDetails--header__link">
              Volver atrás
            </Link>
          </div>
              
              <section className="productDetails--section">
                <img src={details.imgUrl} alt="Imagen del producto" className="productDetails--section__img"/>
                <div className="productDetails--section__details">
                  <h3 className="secondary--title">Descripción</h3>
                  <ul className="details--list">
                    <li><b>Marca:</b> {details.brand}</li>
                    <li><b>Modelo:</b> {details.model}</li>
                    <li><b>Precio:</b> {details.price}€</li>
                    <li><b>CPU:</b> {details.cpu}</li>
                    <li><b>RAM:</b> {details.ram}</li>
                    <li><b>Sistema operativo:</b> {details.os}</li>
                    <li><b>Resolución de pantalla:</b> {details.displayResolution}</li>
                    <li><b>Batería:</b> {details.battery}</li>
                    <li><b>Cámaras:</b> {details.primaryCamera}
                    <br/>{details.secondaryCmera }
                    </li>
                    <li><b>Dimensiones:</b> {details.dimentions}</li>
                    <li><b>Peso:</b> {details.weight !== "" ? details.weight : "No especificado"}</li>
                  </ul>
                  <h3 className="secondary--title">Actions</h3>
                  <div className="personalization">
                    <div className="personalization--items">
                      <div className="personalization--form">
                        <label htmlFor="Storage">Almacenamiento</label>
                        <select name="Storage" defaultValue={details.options.storages.length === 1 ? details.options.storages[0].code : null} onChange={handleStorageChange}>
                          {details.options.storages.map((option) => <option key={option.code} value={option.code}>{option.name}</option>)}
                        </select>
                      </div>
                      <div className="personalization--form">
                        <label htmlFor="Colors">Colores</label>
                        <select name="Colors" defaultValue={details.options.colors.length === 1 ? details.options.colors[0].code : null} onChange={handleColorsChange}>
                          {details.options.colors.map((option) => <option key={option.code} value={option.code}>{option.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <button onClick={submitData} className="addButton">Añadir</button>
                    
                  </div>
                  
                  
                </div>
                
              </section>
              
              
          </article>
      }
      </>
     );
}
 
export default ProductDetail;
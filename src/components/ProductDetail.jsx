import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail, postAddCart } from "../services/api";
import '../stylesheet/product.scss';
import Loader from "./general/loader";

const ProductDetail = (props) => {

    const params = useParams(); 
    
    const [details, setDetails] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedStorage, setSelectedStorage] = useState();
    

    useEffect(() => {
        getProductDetail(params.id).then((data) => {
          setDetails(data);
          setLoading(false);
          console.log(data);
        });
        
      }, [params.id]);

    const handleColorsChange = (e) => {
      setSelectedColor(e.target.value);
      console.log(selectedColor);
    }

    const handleStorageChange = (e) => {
      setSelectedStorage(e.target.value);
      console.log(selectedStorage);
    }

    const submitData = () => {
      const productSelected = {
        id: params.id,
        colorCode: details.options.colors.length === 1 ? Number(details.options.colors[0].code) : Number(selectedColor),
        storageCode: details.options.storages.length === 1 ? Number(details.options.storages[0].code) : Number(selectedStorage)
      }
      console.log(productSelected);
      postAddCart(productSelected).then((data) => {
        props.setProductCount(data);
        console.log(data);
      });
    }

    return ( 
      <>
        {loading ? <Loader/> : 
        <div className="productCard">
              <h4>Detalles del producto</h4>
              <section>
                <img src={details.imgUrl} alt="Imagen del producto"/>
                <div>
                  <h3>Descripción</h3>
                  <ul>
                    <li>Marca: {details.brand}</li>
                    <li>Modelo: {details.model}</li>
                    <li>Precio: {details.price}€</li>
                    <li>CPU: {details.cpu}</li>
                    <li>RAM: {details.ram}</li>
                    <li>Sistema operativo: {details.os}</li>
                    <li>Resolución de pantalla: {details.displayResolution}</li>
                    <li>Batería: {details.battery}</li>
                    <li>Cámaras: {details.primaryCamera}
                    <br/>{details.secondaryCmera }
                    </li>
                    <li>Dimensiones: {details.dimentions}</li>
                    <li>Peso: {details.weight !== "" ? details.weight : "No especificado"}</li>
                  </ul>
                  <h3>Actions</h3>
                  <div>
                    <label for="Storage">Almacenamiento</label>
                    <select name="Storage" defaultValue={details.options.storages.length === 1 ? details.options.storages[0].code : null} onChange={handleStorageChange}>
                      {details.options.storages.map((option) => <option key={option.code} value={option.code}>{option.name}</option>)}
                    </select>
                    <label for="Colors">Colores</label>
                    <select name="Colors" defaultValue={details.options.colors.length === 1 ? details.options.colors[0].code : null} onChange={handleColorsChange}>
                      {details.options.colors.map((option) => <option key={option.code} value={option.code}>{option.name}</option>)}
                    </select>
                  </div>
                  <button onClick={submitData}>Añadir</button>
                </div>
              </section>
              <Link to="/">Volver atrás</Link>
              
          </div>
      }
      </>
     );
}
 
export default ProductDetail;
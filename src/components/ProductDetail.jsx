import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "../services/api";
import '../stylesheet/product.scss';

const ProductDetail = () => {

    const params = useParams(); 
    
    const [details, setDetails] = useState();
    console.log(details);

    useEffect(() => {
        getProductDetail(params.id).then((data) => {
          setDetails(data);
        });
      }, [params]);

    return ( 
        <div className="productCard">
            <h4>Detalles del producto</h4>
            <section>
              <img src={details.imgUrl} alt="Imagen del producto"/>
              <div>
                <h3>Descripción</h3>
                <ul>
                  <li>{details.brand}</li>
                  <li>{details.model}</li>
                  <li>{details.price}</li>
                  <li>{details.cpu}</li>
                  <li>{details.ram}</li>
                  <li>{details.os}</li>
                  <li>{details.displayResolution}</li>
                  <li>{details.battery}</li>
                  <li>{details.brand}</li>
                  <li>{details.dimentions}</li>
                  <li>{details.weight}</li>
                </ul>
                <h3>Actions</h3>
                
              </div>
            </section>
            <Link to="/">Volver atrás</Link>
            
        </div>
     );
}
 
export default ProductDetail;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import "../../stylesheet/header.scss";

export default function Header({ productCount, currentPage, setCurrentPage }) {
  return (
    <header className='header'>
      <Link to='/' className='header--link'>
        <img
          alt='logo de la tienda'
          src={logo}
          className='header--link__logo'
        />
        <h4 className='header--link__title'>Napptilus Store</h4>
      </Link>
      <div className='header--navBar'>
        <Link
          to='/'
          className={`header--navBar__page ${
            currentPage === "catalogue" ? "selected" : ""
          }`}
          onClick={() => setCurrentPage("catalogue")}
        >
          <p>Catálogo</p>
        </Link>
        <p
          className={`header--navBar__page ${
            currentPage === "detail" ? "selected" : ""
          }`}
        >
          Detalle
        </p>
      </div>
      <div className='header--cart'>
        <img
          alt='icono del carro de la compra'
          src={cart}
          className='header--cart__icon'
        />
        <h3>{productCount}</h3>
      </div>
    </header>
  );
}

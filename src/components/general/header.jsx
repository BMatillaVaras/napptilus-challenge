import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import '../../stylesheet/header.scss';

export default function Header ({productCount, currentPage}) {
  return (
    <header>
    <Link to="/">
        <img alt="logo de la tienda" src={logo} className="logo"/>
        <h4>Napptilus Store</h4>
    </Link>
    <p className={`page ${currentPage === "catalogue" ? "selected" : "none"}`}>Catálogo</p>
    <p className={`page ${currentPage === "detail" ? "selected" : "none"}`}>Detalle</p>
    <h3>{productCount}</h3>
    </header>
  )
}

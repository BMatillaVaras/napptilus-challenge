import React from 'react'

export default function Header (props) {
  return (
    <header>
    <h2>Tienda de móviles</h2>
    <h3>{props.productCount}</h3>
    </header>
  )
}

import React from 'react';
import '../../stylesheet/loader.scss'

export default function Loader() {
  return (
    <div className='loader'>
      <h3 className='loader--title'>Cargando...</h3>
      <p className='loader--text'>Espere un momento por favor</p>
    </div>
    
  )
}

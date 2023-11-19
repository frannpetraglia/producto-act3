import './producto.css'
import React, { useState } from 'react';
import fernet_ladrillos from '../producto/fernet_ladrillos.jpg'
import madera_negra from '../producto/madera_negra.jpg'

export default function Producto() {

    
    const [cantidadDisponible, setCantidadDisponible] = useState(14);
    const [cantidad, setCantidad] = useState(0);
    const AgregarAlCarro = () => {
        if (cantidadDisponible != 0) {
            setCantidadDisponible(cantidadDisponible - 1);
            setCantidad(cantidad + 1);
        }
    };
    const QuitarDelCarro = () => {
        if (cantidad > 0) {
            setCantidadDisponible(cantidadDisponible + 1);
            setCantidad(cantidad - 1);
        }
    };

    return (
        <>
            <div className="product-container">


                <img src={fernet_ladrillos} alt="Producto" />
                <div class="product-info">
                    <h2><b>FERNET BRANCA CLASICO 750 cc</b></h2>
                    <p className='pPrecio'>$5200 <br /> en 12x $1026</p>
                    <p className='pDescripcion'>Aperitivo Fernet Branca de 750 mL, ideal para disfrutar en cualquier ocasión.
                        Se presenta en un pack individual para garantizar su calidad y frescura.</p>

                    <div className='divContenedor'>

                        <div className='carrito'>
                            <p>Cantidad Disponible: {cantidadDisponible}</p>
                            <p>Cantidad en el Carrito: {cantidad}</p>
                            <button onClick={AgregarAlCarro}>Agregar al Carrito</button>
                            <button onClick={QuitarDelCarro} >Quitar del Carrito</button>
                        </div>
                        
                        <div className='ingredientes'>
                            <strong className='text-center'>Ingredientes:</strong>
                            <p> Mirra, Ruibarbo, Manzanilla, Cardamomo, Orégano y Azafrán, entre otras </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )


}
import React from 'react'
import { useEffect } from 'react'
import './Envio.css'



export default function Envio (props) {
  useEffect(
    () => {
      localStorage.setItem('carrito', JSON.stringify([]))
    },
    [ ]
  )



  const handleSubmit = function (e) {
    e.preventDefault();
    props.history.push('/carrito/envio/gracias')
        }

  return (
    <div class="container">
      <h1> Ingrese los datos de envío </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Datos del destinatario:</label>
          </div>
          <p></p>
          <div>
            <input placeholder='Nombre'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Apellido'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Celular'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Calle'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Numero'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Ciudad'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Código Postal'></input>
          </div>
          <p></p>
          <div>
            <input placeholder='Provicia'></input>
          </div>
          <p></p>
          <div>
            <input class="btn btn-primary btn-sm" type="submit" value="Comprar" />
          </div>
        </form>
      </div>
    </div>
)}

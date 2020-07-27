import React from 'react'
import { connect } from "react-redux";
import { enviarCompra } from '../../actions/actionProduct'



function OrdenDetails(props) {

  let cantidadDeProductos = props.carrito.length
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price
  let totalAPagar = props.carrito.reduce(reducer, 0)

   const compraYredireccionar = function () {

    props.enviarCompra(props.carrito, props.usuarioLogueado.user.id)
    console.log(props, 'aaaaa')
    props.history.push('/carrito/envio')
  }

  // const handleSubmit = function (e) {
  //   e.preventDefault();
  //   console.log(props)
  //   props.history.push('/carrito/envio/gracias')
 

  //       }


  return (

    <table>

      <thead>
        <tr>
          <th>Cantidad de Productos</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td> {cantidadDeProductos} </td>
          <td> $ {totalAPagar}</td>
          </tr>
          <br></br><br></br>
          {(props.usuarioLogueado.user !== undefined) ? (
            <button onClick={compraYredireccionar} >

          {/* <button onClick={() => enviarCompra(carrito, usuarioLogueado.user.id)} >  */}
              Iniciar Compra
              </button>
            
          ) : (
          <button>Logueate para poder comprar</button>)
          }



      
      </tbody>
    </table>
  )
}


function mapStateToprops(state) {
  return {
    ...state,
    usuarioLogueado: state.usuarioLogueado,
    carrito: state.carrito
  };
}

export default connect(mapStateToprops, { enviarCompra })(OrdenDetails);

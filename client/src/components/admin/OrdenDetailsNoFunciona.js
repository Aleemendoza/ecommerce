import React from 'react'
import { connect } from "react-redux";
import { enviarCompra } from '../../actions/actionProduct'



function OrdenDetails(props) {

  let cantidadDeProductos = props.carrito.length
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price
  let totalAPagar = props.carrito.reduce(reducer, 0)

  function comprar(props){
    
    props.enviarCompra(props.carrito, props.usuarioLogueado.user.id)


  }

  function redireccionar(props){
    console.log(props)
    props.history.push('/carrito/envio')
  }

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
            <button onClick={comprar,redireccionar} >

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


function mapStateToProps(state) {
  return {
    ...state,
    usuarioLogueado: state.usuarioLogueado,
    carrito: state.carrito
  };
}

export default connect(mapStateToProps, { enviarCompra })(OrdenDetails);

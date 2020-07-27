import React from 'react'
import {connect} from "react-redux";
import BotonAgregarACarrito from '../buttons/BotonAgregarACarrito'
import BotonEliminar from '../buttons/BotonEliminar'
import BotonRestarItem from '../buttons/BotonRestarItem';
import {getCarritoDelStorage} from '../../actions/actionProduct'
import {useEffect} from 'react'
import './TablaItems.css';

function TablaItems ({carrito, getCarritoDelStorage}) {

  useEffect(() => {
    if (localStorage.getItem('carrito')) {
      getCarritoDelStorage()
    }
  }, []);

  if (carrito.length >= 0 ) {
    localStorage.setItem('carrito', JSON.stringify(carrito))

  }



  function eliminarObjetosDuplicados(arr, prop) {
    var nuevoArray = [];
    var lookup  = {};
    for (var i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }
    for (i in lookup) {
        nuevoArray.push(lookup[i]);
    }
    return nuevoArray;
}
var duplicadosEliminados = eliminarObjetosDuplicados(carrito, 'id');

function contarProductosEnCarritoDeId(array, id){
  var contador=0
    for (var i = 0 ; i < array.length; i++) {
      if (array[i].id === id){
        contador = contador +1;
    }
    }
    return contador
}

function aumentar(a){
  return a + 1}
  return (
    <div class="container">
      <table class="table table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Acciones</th>
            </tr>
            </thead>
      <tbody>
        {duplicadosEliminados.length > 0 ? (


          duplicadosEliminados.map(product => (
            <tr key={product.id}>
              <td><img width="18%" src={product.image}/></td>
              <td class="td">{product.name}</td>
              <td>{product.description}</td>
              <td>$ {product.price}</td>
              <td class="botones">
                <BotonRestarItem id={product.id} name= '-'/>  
                {contarProductosEnCarritoDeId(carrito, product.id)}                
                <BotonAgregarACarrito id={product.id} name= '+'/>
              </td>
              <td>$ { product.price * contarProductosEnCarritoDeId(carrito, product.id)}</td>
              <td><BotonEliminar id={product.id} name= 'Eliminar'/></td>
            </tr>
          ))
        )
        :
         (
          <tr>
            <td colSpan={7}>No hay productos agregados al carrito</td>
          </tr>
        )
        }
      </tbody>
    </table>
  </div>
  )

}


function mapStateToProps(state) {
  return {
    ...state,
    carrito: state.carrito
  };
}


export default connect (mapStateToProps, {getCarritoDelStorage} )(TablaItems);

import React from 'react'
import TablaItems from './TablaItems'
import OrdenDetails from '../admin/OrdenDetails'
import {connect} from "react-redux";

// import {useEffect} from 'react'
// import {getCarritoDelStorage} from '../../actions/actionProduct'


function Carrito ({carrito}) {

  // useEffect(() => {
  //   if (localStorage.getItem('carrito')) {
  //     getCarritoDelStorage()
  //   }
  // }, []);



return (
  <div class="container">
    <TablaItems/>
      {(carrito.length > 0) ? (<OrdenDetails />) : ('')}
    </div>
)}

function mapStateToProps(state) {
    return {
      ...state,
      carrito: state.carrito
    };
  }


  export default connect (mapStateToProps, {} )(Carrito);

import React from 'react'
import {connect} from "react-redux";
import {agregarItemACarrito} from '../../actions/actionProduct'

function BotonAgregarACarrito ({agregarItemACarrito, id, name}) {
    function AgregarItem(){
        agregarItemACarrito(id)
        if (name === 'Agregar al carrito') {
        alert('Se agrego al carrito')}
    }

    return (
    <div className='botonAgregarACarrito'>
        <button class="btn btn-primary btn-sm" onClick={AgregarItem}>
             {name}
        </button>
    </div>)
}


function mapStateToProps(state) {
    return {
    };
  }


export default connect (mapStateToProps, {agregarItemACarrito} )(BotonAgregarACarrito);

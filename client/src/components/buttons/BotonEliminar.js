import React from 'react'
import { connect } from "react-redux";
import { EliminarItemDeCarrito } from '../../actions/actionProduct'

function BotonEliminar({ EliminarItemDeCarrito, id, name }) {
    function EliminarItem() {
        EliminarItemDeCarrito(id)
        alert('Se elimino el producto del carrito')
    }

    return (
        <div className='botonEliminarItem'>
            <button class="btn btn-danger btn-sm" onClick={EliminarItem}> {/* No colocar parentesis, porque sino lo ejecuta apenas lo renderiza*/}
                {name}
            </button>
        </div>)
}


function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps, { EliminarItemDeCarrito })(BotonEliminar);

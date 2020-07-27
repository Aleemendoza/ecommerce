import React from 'react'
import {connect} from "react-redux";
import {RestarItemEnCarrito} from '../../actions/actionProduct'

function BotonRestarItem ({RestarItemEnCarrito, id, name}) {
    function RestarItem(){
        RestarItemEnCarrito(id)
    }

    return (
    <div className='botonEliminarItem'>
        <button class="btn btn-primary btn-sm" onClick={RestarItem}> {/* No colocar parentesis, porque sino lo ejecuta apenas lo renderiza*/}
             {name}
        </button>
    </div>)
}


function mapStateToProps(state) {
    return {
    };
  }


export default connect (mapStateToProps, {RestarItemEnCarrito} )(BotonRestarItem);

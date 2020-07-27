import React, { useState } from 'react'
import {connect} from "react-redux";
import {updateOrder } from '../../actions/actionProduct'

const OrderCambioDeEstado = props => {
  const [ status, setStatus ] = useState(props.currentStatus)



  const handleInputChange = event => {
    setStatus({ ...status, [event.target.name]: event.target.value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateOrder(props.orden.UserId, props.orden.id, status)

      }}
    >


      <select name='status'onChange={(e) => handleInputChange(e)}>
          <option selected disabled  >{props.orden.status}</option>
          <option>Created</option>
          <option>Uncreated</option>
          <option>Inprocess</option>
          <option>Cancelled</option>
          <option>Completed</option>
      </select >

      <button class="btn-warning btn-sm" type='submit'>Cambiar Estado</button>

    </form>
  )
}

function mapStateToProps(state) {
  return {  };
}


export default connect (mapStateToProps, {updateOrder} )(OrderCambioDeEstado);

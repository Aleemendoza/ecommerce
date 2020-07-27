import React, { useState, useEffect } from 'react'
import {connect} from "react-redux";
import {updateUser } from '../../actions/actionProduct'

const UserCambioDeRol = props => {
  const [ user, setUser ] = useState(props.currentUser)



  const handleInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(props.id, user)

      }}
    >


      <select name='rol'onChange={(e) => handleInputChange(e)}>
          <option>{props.user.rol}</option>
          <option>user</option>
          <option>admin</option>
      </select >

      <button class="btn btn-warning btn-sm"  type='submit'>Cambiar Rol</button>
      {/* <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button> */}
    </form>
  )
}

function mapStateToProps(state) {
  return {  };
}


export default connect (mapStateToProps, {updateUser} )(UserCambioDeRol);

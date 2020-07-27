import React from 'react';
import { getUser, deleteUser, updateUser } from '../../actions/actionProduct'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserCambioDeRol from './UserCambioDeRol'
import './users.css'


class Users extends React.Component {
    constructor(props) {
      super(props);
        // this.state =
        // { rol: '' };
        // console.log(this.state)
    }

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div class="container">
        <div class="back-to-admin">
          <NavLink class="btn btn-primary btn-sm" exact to="/admin"> Volver al Panel Admin </NavLink> <br></br>
        </div>

        <table class="table table-sm">
          <thead class="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Borrar Usuario</th>
            </tr>
          </thead>

          <tbody>
            {this.props.usuarios.length > 0 && this.props.usuarios.map(user => (
              <tr key={user.id}>
                <td> {user.firstName} </td>
                <td> {user.lastName}  </td>
                <td> {user.email}     </td>


                <td><UserCambioDeRol id={user.id} user={user}/></td>


                <td>
                  <button class="btn btn-danger btn-sm" onClick={() => this.props.deleteUser(user.id)}> Eliminar </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ...state,
    usuarios: state.user
  };
}
export default connect(mapStateToProps, { getUser, deleteUser, updateUser })(Users);

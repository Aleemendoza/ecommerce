import React from 'react';
import { getAllOrdenes, getUser , deleteOrder, filterOrder } from '../../actions/actionProduct'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import OrderCambioDeEstado from './OrderCambioDeEstado'
import './Ordenes.css'


class Ordenes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllOrdenes()
    this.props.getUser()}


  obtenerEmail (array, id) {
    var nombre =''
    for (let i = 0; i < array.length; i++) {
     if (array[i].id === id) {
       nombre = array[i].email
      }
    }
    return  nombre
    }

  render() {
    return (
      <div class="container">
        <div class="back-to-admin">
          <NavLink class="btn btn-primary btn-sm" exact to="/admin"> Volver al Panel Admin </NavLink> <br></br><br></br>
        </div>
        <div class='filter-status'>
          <select className='selectOrder' onChange={(e)=>this.props.filterOrder(e.target.value)}>
             <option > Todas </option>
             <option > Created </option>
             <option > Uncreated </option>
             <option > Inprocess </option>
             <option > Cancelled </option>
             <option > Completed </option>
             {/* {this.props.ordenes.length > 0 && this.props.ordenes.map(orden => <option>{orden.status}</option>) } */}
           </select>
        </div>

        <table class="table table-sm">
          <thead class="thead-dark">
            <tr>
              <th>N° Orden</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {this.props.ordenes && this.props.ordenes.map(orden => (
              <tr key={orden.id}>
                <td> {orden.id} </td>
                <td>  {this.obtenerEmail(this.props.user, orden.UserId)} </td>
                <td> {orden.status}     </td>
                <td class='acciones'>
                  <div class="change">
                    <OrderCambioDeEstado orden={orden}/>
                  </div>
                  <div class="delete">
                    <button class="btn-danger btn-sm" onClick={() => this.props.deleteOrder(orden.id)}> Eliminar </button>
                  </div>
                  <div class="detail">
                    <NavLink exact to={"/admin/ordenes/" + orden.id} style={{ textDecoration: 'none' }}> Ver detalle </NavLink> <br></br>
                  </div>
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
    user: state.user,
    ordenes: state.ordenes
  };
}
export default connect(mapStateToProps, { getAllOrdenes, getUser, deleteOrder, filterOrder })(Ordenes);

import React from 'react';
import { getAllOrdenes, getOrderDetails, getProductDetail } from '../../actions/actionProduct'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';



class OrdenIndividual extends React.Component {
  constructor(props) {
    super(props);
  }
  

  componentDidMount() {
    this.props.getAllOrdenes()
    const { match: { params: { id }}} = this.props;
    this.props.getOrderDetails(id)
  }

   obtenerNombre (array, id) {
    var nombre =''
    for (let i = 0; i < array.length; i++) {
     if (array[i].id === id) {
       nombre = array[i].name
      }
    }
    return  nombre
    }

    
    //  reducer = (accumulator, currentValue) => accumulator + currentValue.price
     
    //   totalApagar (){ return this.props.ordenDetails.reduce(this.reducer, 0)

    // }

    obtenerTotal (array) {
      var total =0
      for (let i = 0; i < array.length; i++) {
          {
         total = total + parseInt(array[i].price)
        }
      }
      return  total
      }

    


  render() {
    return (
      <div class='container'>
         <NavLink class='btn btn-primary btn-sm' exact to="/admin/ordenes/"> Ordenes </NavLink> <br></br> <br></br>
       <table class= 'table table-sm'>
          <thead class='thead-dark'>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {this.props.ordenDetails && this.props.ordenDetails.map(orden => (
              <tr key={orden.id}>
                <td> { this.obtenerNombre(this.props.catalog, orden.productId) } </td>
                <td> $ { orden.price/ orden.amount } </td>
                <td> {orden.amount}     </td>
                <td> $ {orden.price}  </td>
               </tr>
               
            ))}
          </tbody>
        </table>
        <h4>Total ${this.obtenerTotal(this.props.ordenDetails)} </h4>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ...state,
    ordenDetails: state.ordenDetails,
    catalog: state.catalog
  };
}
export default connect(mapStateToProps, { getAllOrdenes, getOrderDetails,getProductDetail })(OrdenIndividual);

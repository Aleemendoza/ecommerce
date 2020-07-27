import React from 'react'
import {connect} from "react-redux";
import {useEffect} from 'react'
import './ProductTable.css'
import {
  getAllProductwithoutFilter,
  getAllCategory,
  deleteProduct
} from '../../../actions/actionProduct'

function ProductTable({products,getAllProductwithoutFilter,getAllCategory, deleteProduct, editRow}) {

  useEffect(() => {
    getAllProductwithoutFilter()
    getAllCategory()
  }, []);

  return (

  <table class="table table-sm">
    <thead class="thead-dark">
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Categoria</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Imagen</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {products.length > 0 ? (
        products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.categoriaName}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><img width="18%" src={product.image}/></td>
            <td>
              <div class="buttons">
                <button
                onClick={() => {
                editRow(product)
                }}
                class="btn btn-warning btn-sm"> Editar </button>
                <button
                onClick={() => deleteProduct(product.id)}
                class="btn btn-danger btn-sm"> Eliminar </button>
              </div>
            </td>
          </tr>
        ))
      )
      :
       (
        <tr>
          <td colSpan={7}>No hay productos</td>
        </tr>
      )
      }
    </tbody>
  </table>
  )

}


function mapStateToProps(state) {
  return {
    ...state,
    products: state.catalog
  };
}


export default connect (mapStateToProps, {getAllProductwithoutFilter, getAllCategory, deleteProduct} )(ProductTable);

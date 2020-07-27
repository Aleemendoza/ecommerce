import React, { useState, useEffect } from 'react'
import {connect} from "react-redux";
import {updateProduct, getAllCategory} from '../../../actions/actionProduct'
import './EditProductForm.css'

const EditProductForm = props => {
  const [ product, setProduct ] = useState(props.currentProduct)

  useEffect(
    () => {
      setProduct(props.currentProduct)
     props.getAllCategory()
    },
    [ ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    // const { name, value } = event.target

    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={event => {
        event.preventDefault()
        props.updateProduct(product.id, product)
      }}>
      <div class="container">
        <div>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} placeholder="Nombre" />
        </div>
        <div>
          <input type="text" name="description" value={product.description} onChange={handleInputChange} placeholder="Descripción"/>
        </div>
        <div>
          <select name='categoriaName'onChange={(e) => handleInputChange(e)}>
            {props.categories.map(categoria => <option>{categoria.name}</option>) }
            </select>
        </div>
        <div>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} placeholder="Precio"/>
        </div>
        <div>
          <input type="text" name="stock" value={product.stock} onChange={handleInputChange} placeholder="Stock"/>
        </div>
        <div>
          <input type="text" name="image" value={product.image} onChange={handleInputChange} placeholder="Imagen"/>
        </div>
          <button class="btn btn-success btn-sm">Actualizar producto</button>
          <button class="btn btn-danger btn-sm" onClick={() => props.setEditing(false)}> Cancelar </button>

      </div>
    </form>
  )
}

// export default EditProductForm

function mapStateToProps(state) {
  return {
    ...state,
    categories: state.categories
  };
}


export default connect (mapStateToProps, {updateProduct, getAllCategory} )(EditProductForm);

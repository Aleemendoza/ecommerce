import React, { useState, Fragment } from 'react'
import AddProductForm from './forms/AddProductForm'
import EditProductForm from './forms/EditProductForm'
import ProductTable from './tables/ProductTable'
import { NavLink } from 'react-router-dom';
import './Crud.css'


const Crud = () => {


	// Data
	const productsData = []

	const initialFormState = { id: 0, name: '', description: '', category: '', price: '', stock: '', image: '' }

	// Setting state
	const [ products, setProducts ] = useState(productsData)
	const [ currentProduct, setCurrentProduct ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addProduct = product => {
		product.id = products.length + 1
		setProducts([ ...products, product ])
	}

	const deleteProduct = id => {
		setEditing(false)

		setProducts(products.filter(product => product.id !== id))
	}

	const updateProduct = (id, updatedProduct) => {
		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
	}

	const editRow = product => {
		setEditing(true)

		setCurrentProduct({
			id: product.id,
			name: product.name,
			description: product.description,
			category: product.category,
			price: product.price,
			stock: product.stock,
			image: product.image
		})
	}

	return (
		<div class="container">
			<div class="back-to-admin">
				<NavLink class="btn btn-primary btn-sm" exact to="/admin"> Volver al Panel Admin </NavLink> <br></br>
			</div>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Editar productos</h2>
							<EditProductForm
								editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
							/>
						</Fragment>
					) : (
						<Fragment>
							<div class="agregar">
								<h2>Agregar productos</h2>
							</div>
							<AddProductForm addProduct={addProduct} />
						</Fragment>
					)}
				</div>

				<div className="flex-large">
					<h2>Productos</h2>
					<ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
				</div>
			</div>
		</div>
	)
}




export default Crud

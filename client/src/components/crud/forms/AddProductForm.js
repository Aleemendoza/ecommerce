import React, { Component } from "react";
import { connect } from "react-redux";
import {addProduct, getAllCategory}  from '../../../actions/actionProduct'
import './AddProductForm.css'

class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state =
    { name: '',
      description: '',
      categoriaName: '',
      price: '',
      stock: '',
      image: '' };

  }

  componentDidMount () {
     this.props.getAllCategory()

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addProduct(this.state);
    console.log(this.state)
  }

  render() {
    const {name ,description, price, stock } = this.state;
    return (
      <div class='AddProduct'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="container">
            <div>
              <input type="text" name="name" placeholder="Nombre" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <input type="text" name="description" placeholder="Descripción" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <input type="text" name="price" placeholder="Precio" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <input type="text" name="stock" placeholder="Stock" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <input type="text" name="image" placeholder="Imagen" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label>Categorias </label>
              <select name='categoriaName' onChange={(e) => this.handleChange(e)}>
                <option> Seleccionar </option>
                {/* Sacar el option de Seleccionar para que no se agregue como categoria*/}
                {this.props.categories.length > 0 && this.props.categories.map(categoria => <option > {categoria.name} </option>) }
              </select >
            </div>
            <div>
              <button class="btn btn-success btn-sm" type="submit">Agregar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return {
      ...state,
      categories: state.categories
    };
  }


export default connect(mapStateToProps, { addProduct, getAllCategory } )(AddProductForm);

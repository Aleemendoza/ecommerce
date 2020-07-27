import React, { Component } from "react";
import { connect } from "react-redux";
import './categories.css';
import { addCategory } from '../../actions/actionProduct'
import { NavLink } from 'react-router-dom';



class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }
  handleChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addCategory(this.state.category);
    alert('Se creo la categoria con exito')
  }

  render() {
    const { category } = this.state;
    return (
      <div class='container'>
        <div class="back-to-admin">
          <NavLink class="btn btn-primary btn-sm" exact to="/admin"> Volver al Panel Admin </NavLink>
        </div>
        <form class="form-categories" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              placeholder="Categoría"
              type="text"
              id="category"
              autoComplete="off"
              value={category}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <br></br>
          <div>
            <button class="btn btn-success btn-sm" type="submit">Agregar</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, { addCategory })(Categories);

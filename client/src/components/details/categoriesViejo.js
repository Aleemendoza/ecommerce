import React, { Component } from "react";
import { connect } from "react-redux";
// import './categories.css';
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
      <div className='AddCategory'>
        <NavLink exact to="/admin"> Admin </NavLink> <br></br><br></br>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="category"
              autoComplete="off"
              value={category}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit">Agregar Categoria</button>
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

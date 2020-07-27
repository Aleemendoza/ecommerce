import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct, getAllProduct } from '../../actions/actionProduct'
import './SearchBar.css'



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  handleChange(event) {

    this.setState({ keyword: event.target.value });
    this.props.getProduct(this.state.keyword);
    if (this.state.keyword === null) {
      this.props.getAllProduct()
    }

  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.getProduct(this.state.keyword);

  }

  render() {
    const { keyword } = this.state;
    return (
      <div class="overlay">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="overlay-content">
            <input class="inp"
              size='50'
              type="text"
              id="keyword"
              placeholder='Buscar'
              autoComplete="off"
              value={keyword}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          {/* <button type="submit">BUSCAR</button> */}
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    product: state.catalog
  };
}

export default connect(mapStateToProps, { getProduct, getAllProduct })(SearchBar);



// function mapDispatchToProps(dispatch) { //->  recibe como parametro una funcion, que la llamamos dispatch,
//   return {                              // y nos devuelve un objecto, con las acciones que queremos enviar a nuestro store
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)), // -> Cada funcion nos devuelve la funcion dispatch
//     getProduct: keyword => dispatch(getProduct(keyword))                //que recibe como parametro la action que queremos enviar al store,
//   };                                                        // en nuestro caso son addMovieFavorite y getProduct que tenemos en nuestra carpeta actions
// }                                               // Los parametros que recibe cada function son los payloads que usamos en nuestra action.

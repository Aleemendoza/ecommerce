import React from 'react';
import { connect } from "react-redux";
import SingleProduct from '../product/SingleProduct.js';
import {useEffect} from 'react'
import {filterCategory, getAllProduct, getAllCategory, getCarritoDelStorage} from '../../actions/actionProduct'
import '../details/Catalog.css';


function Catalog ({catalog, categories, filterCategory, getAllProduct , getAllCategory,getCarritoDelStorage}) {
  useEffect(() => {
    getAllProduct()
    getAllCategory()
    getCarritoDelStorage()

  }, []);

  return (
    <div className="container">
      <div className='componentCatalogo'>
        <select class='selectcategories' onChange={(e)=>filterCategory(e.target.value)}>
          <option  > Seleccionar Categoría </option>
          <option> Todos </option>
          {categories.length > 0 && categories.map(category => <option>{category.name}</option>) }
         </select>
      </div>
      <div className='allProduct'>
        {catalog.length > 0 && catalog.map(product =>
          <SingleProduct
            key =          {product.id + 100}
            id =           {product.id}
            name =         {product.name}
            image =        {product.image}
            price =        {product.price}

          />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    catalog: state.catalog,
    categories: state.categories
  };
}



export default connect( mapStateToProps, {filterCategory, getAllProduct, getAllCategory, getCarritoDelStorage} )(Catalog);

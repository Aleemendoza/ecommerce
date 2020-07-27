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
    if (localStorage.getItem('carrito')) {
      getCarritoDelStorage()
    }


  }, []);


  return  (
    <div className='componentCatalogo'>

        <select className='selectcategories' onChange={(e)=>filterCategory(e.target.value)}>
             <option > Todos </option>
             {categories.length > 0 && categories.map(category => <option>{category.name}</option>) }
        </select>

        <div className='allProduct'>

              {catalog.length > 0 && catalog.map(product =>
                  <SingleProduct
                      key =          {product.id + 100}
                      id =          {product.id}
                      name =         {product.name}
                      image =        {product.image}
                      price =        {product.price}
                      description =  {product.description}
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

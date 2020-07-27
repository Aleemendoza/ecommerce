import React from 'react';
import BotonAgregarACarrito from '../buttons/BotonAgregarACarrito'
import { getProductDetail, getAllReviews } from '../../actions/actionProduct'
import { connect } from "react-redux";
import OneReview from '../review/OneReview'
import Reviews from '../review/Reviews'



class ProductDetails extends React.Component {
  
    

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getProductDetail(id)
        this.props.getAllReviews(id)
    }

    render() {
        return (
            <div className='ProductDetails'>
                <img src={this.props.product.image} alt=''></img>
                <h2>{this.props.product.name}</h2>
                <p>Categoría: {this.props.product.categoriaName}</p>
                <p>Descripción: {this.props.product.description}</p>
                <h4>Precio: ${this.props.product.price}</h4>
                <p>Stock: {this.props.product.stock}</p>
                <BotonAgregarACarrito id={this.props.product.id} name='Agregar al carrito' />

                <div >
                {this.props.reviews.length > 0 && <h3>Comentarios</h3>}
                {this.props.reviews.length > 0 && this.props.reviews.map(review =>
                    <OneReview
                        key =          {review.id + 100}
                        rate =          {review.rate}
                        user =         {review.UserId}
                        description =  {review.description}
                        />
                    )}
                    </div>

                {(this.props.usuarioLogueado.user !== undefined) ? ( <Reviews />) : ('')}


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
        usuarioLogueado: state.usuarioLogueado,
        product: state.catalog,
        reviews: state.reviews

    };
}


export default connect(mapStateToProps, { getProductDetail, getAllReviews })(ProductDetails);        
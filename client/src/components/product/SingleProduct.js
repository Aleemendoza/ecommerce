import React from 'react';
import { Link } from 'react-router-dom'
import './SingleProduct.css';
import BotonAgregarACarrito from '../buttons/BotonAgregarACarrito'



export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            category: this.props.category,
            price: this.props.price,
            stock: this.props.stock,
            image: this.props.image
        }
    }


    render() {
        return (
            <div className='all'>
                <img src={this.props.image} alt=''></img>
                <Link to={'/catalog/' + this.props.id} style={{ textDecoration: 'none' }}>
                    <h2 className="name">{this.props.name}</h2>
                </Link>
                <p>{this.props.description}</p>
                <h4 className="price">Precio: ${this.props.price}</h4>
                {/* <p>Stock: {this.props.stock}</p> */}
                {/* <button className="button">Agregar al carrito</button> */}
                <BotonAgregarACarrito id={this.props.id} name='Agregar al carrito' />

            </div>
        );
    }
}

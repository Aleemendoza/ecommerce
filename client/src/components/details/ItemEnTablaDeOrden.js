import React from 'react';
import {Link} from  'react-router-dom'
// import './ItemEnTablaDeOrden.css';



export default class ItemEnTablaDeOrden extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            category: this.props.category,
            price: this.props.price,
            stock: this.props.stock,
            image: this.props.image
        }
    }
    

    render(){
        return (
        <div className= 'Contenedor-ItemEnTablaDeOrden'>
                <div> 
                    <img src = {this.props.image} alt=''></img>
                </div>
                <div>
                    <Link to={'/catalog/'+ this.props.id} >
                        <h2>{this.props.name}</h2>
                    </Link>
                        <p>{this.props.description}</p>
                        <h4>Precio: ${this.props.price}</h4>
                        <p>Stock: {this.props.stock}</p>
                        <button> Editar </button>
                        <button> Eliminar </button>
                </div>
        </div>
        );
    }
}
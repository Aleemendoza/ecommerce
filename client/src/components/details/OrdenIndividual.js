import React from 'react';
import { getOrderDetails, getAllOrdenes } from '../../actions/actionProduct'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';



class OrdenIndividual extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        console.log(id)
        this.props.getAllOrdenes()
        this.props.getOrderDetails(id)
        console.log(this.props.ordenDetails)
    }

    render() {
        return (
            <div className='OrderDetails'>
                <NavLink exact to="/admin/ordenes/"> Ordenes </NavLink> <br></br>
                {this.props.ordenDetails.map(orden =>
                    (<div>
                        <p>ProductId: {orden.productId}</p>
                        <p>Precio: {orden.price}</p>
                        <p>Cantidad: {orden.amount}</p>
                    </div>
                    ))}
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        ...state,
        ordenDetails: state.ordenDetails

    };
}


export default connect(mapStateToProps, { getOrderDetails, getAllOrdenes })(OrdenIndividual);        
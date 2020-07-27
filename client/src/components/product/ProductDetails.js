import BotonAgregarACarrito from '../buttons/BotonAgregarACarrito'
import { getProductDetail, getAllReviews, getUser } from '../../actions/actionProduct'
import { connect } from "react-redux";
import OneReview from '../review/OneReview'
import Reviews from '../review/Reviews'
import React, { useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ProductDetails.css';



 function ProductDetails (props) {
    const {buttonLabel, className} = props;

    const [modal, setModal] = useState(false)
    // const toggle = () => setModal(!modal);
    function    toggle () {
        const { match: { params: { id } } } = props;
        props.getAllReviews(id)
        setModal(!modal)

    }


    useEffect(() => {
        const { match: { params: { id } } } = props;
        props.getProductDetail(id)
        props.getAllReviews(id)
        props.getUser()
   },[]);

    function obtenerNombre (array, id) {
    var nombre =''
    for (let i = 0; i < array.length; i++) {
     if (array[i].id === id) {
       nombre = array[i].firstName
      }
    }
    return  nombre
    }

        return (
          <div class="container">
            <div class='wrapper'>
              <div class='image'>
                  <img width="50%" src={props.product.image} alt=''></img>
              </div>

              <div class='text'>
                <div>
                  <h2>{props.product.name}</h2>
                </div>
                <div>
                  <p>Categoría: {props.product.categoriaName}</p>
                </div>
                <div>
                  <p>Descripción: {props.product.description}</p>
                </div>
                <div>
                  <h4>Precio: ${props.product.price}</h4>
                </div>
                <div>
                  <p>Stock: {props.product.stock}</p>
                </div>
              <div class="botones">
                <div class="addButton">
                  <BotonAgregarACarrito id={props.product.id} name='Agregar al carrito' />
                </div>
                <div>
                  {props.reviews.length > 0 && <h3></h3>}
                  <Button size="sm"onClick={toggle}>Ver comentarios{buttonLabel}</Button>
                </div>
              </div>
              <div>

                <Modal isOpen={modal} toggle={toggle} className={className}>
                  <ModalHeader toggle={toggle}>Comentarios</ModalHeader>
                    <ModalBody>
                      {props.reviews.length > 0 && props.reviews.map(review =>
                        <OneReview
                          key =          {review.id + 100}
                          rate =          {review.rate}
                          name =         {obtenerNombre(props.usuarios, review.UserId)}
                          date =          {review.createdAt.substr(0,10)}
                          description =  {review.description}
                          />
                        )}
                    </ModalBody>
                    <ModalFooter>
                      <Button class="button" color="secondary" onClick={toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
              </div>
              </div>
                {(props.usuarioLogueado.user !== undefined) ? ( <Reviews />) : ('')}
              </div>
            </div>
        );
    }


function mapStateToProps(state) {
    return {
        ...state,
        usuarios: state.user,
        usuarioLogueado: state.usuarioLogueado,
        product: state.catalog,
        reviews: state.reviews

    };
}


export default connect(mapStateToProps, { getProductDetail, getAllReviews, getUser })(ProductDetails);

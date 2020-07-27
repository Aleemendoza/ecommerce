import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux'
import {logOut} from '../../actions/actionProduct'

function NavBar(props) {

    

    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/catalogue" >Home</NavLink>
                        {(props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol ===  'user') ?(
                      
                            <NavLink onClick= {props.logOut} exact to='/catalogue'>Logout</NavLink>
                        ) : 
                            (   <div>
                                    <NavLink exact to="/registro" >Registrar</NavLink>
                                    <NavLink exact to="/login" >Login</NavLink>
                                </div>
                            )}
                      
                        <NavLink exact to="/carrito" >carrito</NavLink>
                        {(props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol ===  'admin') ?( <div><NavLink exact to="/admin" >ADMIN</NavLink></div>) : ('')}
                  
                    </li>
                </ul>
            </nav>
        </header>
    )
}


function mapStateToProps(state) {
    return {
      ...state,
      usuarioLogueado: state.usuarioLogueado
    };
  }


  export default connect (mapStateToProps, {logOut} )(NavBar);

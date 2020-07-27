import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux'
import { logOut } from '../../actions/actionProduct'
import SearchBar from '../searchBar/SearchBar'

function NavBar(props) {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark pink lighten-3">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="list">
            <li className="list-item">
              <div>
                <NavLink exact to="/catalogue" style={{ textDecoration: 'none' }} >HOME</NavLink>
              </div>
              {(props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol === 'user') || (props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol === 'admin')  ? (
                <div>
                  <NavLink onClick={props.logOut} exact to='/catalogue' style={{ textDecoration: 'none' }}>LOGOUT</NavLink>
                </div>
              ) :
                (<div>
                  <NavLink exact to="/registro" style={{ textDecoration: 'none' }}>REGISTRATE</NavLink>
                  <NavLink exact to="/login" style={{ textDecoration: 'none' }}>LOGIN</NavLink>
                </div>
                )}
              <div>
                <NavLink exact to="/carrito" style={{ textDecoration: 'none' }}>CARRITO</NavLink>
              </div>
              {(props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol === 'admin') ? (
                <div>
                  <NavLink exact to="/admin" style={{ textDecoration: 'none' }}>ADMIN</NavLink>
                  
                </div>
              ) : ('')}

            </li>
          </ul>
        </div>
        <div>

          <div class="logo">
            <img width="60%" src="https://i.ibb.co/Gs0h4cj/Logo-Makr-1-B99nc.png"></img>
          </div>
        </div>
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


export default connect(mapStateToProps, { logOut })(NavBar);

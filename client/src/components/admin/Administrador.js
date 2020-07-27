import React from 'react'
import { NavLink } from 'react-router-dom';
import './Administrador.css';


export default function Administrador() {
  return (
    <div class="container">
      <div className="div">
        <button type="button" class="btn btn-primary">
          <NavLink exact to="/admin/categorias"><p className="prgrph"> Categorias </p></NavLink>
        </button>
        <button type="button" class="btn btn-primary">
          <NavLink exact to="/admin/productos"><p className="prgrph"> Productos </p></NavLink>
        </button>
        <button type="button" class="btn btn-primary">
          <NavLink exact to="/admin/usuarios"><p className="prgrph"> Usuarios </p></NavLink>
        </button>
        <button type="button" class="btn btn-primary">
          <NavLink exact to="/admin/ordenes"><p className="prgrph"> Ordenes </p></NavLink>
        </button>
      </div>
    </div>
  )
}

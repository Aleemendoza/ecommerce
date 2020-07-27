import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Administrador() {


    return (
        <div >

            <NavLink exact to="/admin/categorias"> Categorias </NavLink> <br></br> <br></br>
            <NavLink exact to="/admin/productos">  Productos  </NavLink><br></br> <br></br>
            <NavLink exact to="/admin/usuarios">   Usuarios   </NavLink><br></br> <br></br>
            <NavLink exact to="/admin/ordenes">   Ordenes   </NavLink>

        </div>)
}

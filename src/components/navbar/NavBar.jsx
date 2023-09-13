import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
      <div >
        <nav>
        <NavLink to='/' activeClassName="active-link">Home</NavLink>
        <NavLink to='/Useref' activeClassName="active-link">Estudios</NavLink>
        <NavLink to='/Proyectos' activeClassName="active-link">Proyectos</NavLink>
        <NavLink to='/Contactame' activeClassName="active-link">Contactame</NavLink>
        </nav>
      </div>
    );
  };
  
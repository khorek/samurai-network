import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className={s.columnMenu} container-fluid>
          <h3>Menu:</h3>
          <NavLink to='/profile' className='navbar-brand mb-0 h1'>Profile</NavLink>
          <NavLink to='/dialogs' className="navbar-brand mb-0 h1">Dialogs</NavLink>
          <NavLink to='/users' className="navbar-brand mb-0 h1">Users</NavLink>
        </div>
      </nav>
    </>
  )
}
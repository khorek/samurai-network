import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className="container-fluid">
                HEADER
                <img src="https://via.placeholder.com/20x20/000000/000000%20?Text=Logo" alt="logo" className="App-logo" />
                {/* <a className="navbar-brand">{props.name}</a> */}
            </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>Login: {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </nav>
    )
}

export default Header;
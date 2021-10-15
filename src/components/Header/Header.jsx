import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className="container-fluid">
                AvaBook
                <img src="https://via.placeholder.com/20x20/000000/000000%20?Text=Logo" alt="logo" className="App-logo" />
            </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>Username: {props.login} <Button onClick={props.logout}>Log out</Button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </nav>
    )
}

export default Header;
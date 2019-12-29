import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-funny-yellow-bear-cartoon-character-png-image_4815036.jpg' alt='' />
            <div className={classes.loginBlock} >
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'} >Login</NavLink>}
            </div>

        </header>
    )
}

export default Header;

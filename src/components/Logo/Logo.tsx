import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png'
function Logo() {
    return (
        <div>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" />
            </NavLink>
        </div>
    );
}

export default Logo;

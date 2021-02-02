import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext} from 'react-icons/lib';
import { ReactComponent as Logo } from '../../images/icon_pokeball.svg';

import "./Navbar.css";

function Navbar() {
    const [click, setClick]  = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <NavLink className="navbar-logo" exact to='/' onClick={closeMobileMenu}>
                        <Logo className="nav-icon" />
                        Pokemon
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink  exact to='/' className="nav-links"  activeClassName='is-active' onClick={closeMobileMenu}>
                                Pokemon List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/my-pokemon-list' className="nav-links" activeClassName='is-active' onClick={closeMobileMenu}>
                                My Pokemon List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/pokemon-detail' className="nav-links"  activeClassName='is-active' onClick={closeMobileMenu}>
                                Pokemon Detail
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
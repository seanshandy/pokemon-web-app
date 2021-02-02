import React, { useState} from 'react';
import { Link } from "react-router-dom";
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
                    <Link className="navbar-logo" to='/' onClick={closeMobileMenu}>
                        <Logo className="nav-icon" />
                        Pokemon
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Pokemon List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/my-pokemon-list' className="nav-links" onClick={closeMobileMenu}>
                                My Pokemon List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pokemon-detail' className="nav-links" onClick={closeMobileMenu}>
                                Pokemon Detail
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
import React, { useState } from 'react';
import { NavbarItem } from './NavbarItem';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { green } from '@material-ui/core/colors';
import '../../../container.css';
import './Navbar.css';
export const Navbar = () => {
    const [clicked, setclicked] = useState(false);
    const handleClicked = () => setclicked(!clicked);
    return (
        <div className='wrapper'>
            <nav className='navbar container '>
                <div className='logo'>
                    <img src='./logo-verde.jpg' alt='logo-mutual' />
                </div>
                <NavbarItem />
                <AccountCircleRoundedIcon style={{ color: green[300] }} />
            </nav>
        </div>
    );
};

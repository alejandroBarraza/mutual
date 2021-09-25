import React from 'react';
import { green } from '@material-ui/core/colors';
import '../../../container.css';
import './NavbarDesktop.css';
import { NavbarItem } from './NavbarItem';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

export const NavbarbarDesktop = () => {
    return (
        <div className='wrapper'>
            <nav className='navbar container '>
                <div className='logo'>
                    <img src='./logo-verde.jpg' alt='logo-mutual' />
                </div>
                <ul className='navbar-items'>
                    {NavbarItem.map((item, index) => (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <AccountCircleRoundedIcon style={{ color: green[300] }} />
            </nav>
        </div>
    );
};

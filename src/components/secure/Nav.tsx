import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => (
    <div className="nav__container">
        <nav className="nav__navigation">
            <ul>
                <li><NavLink to={'/'} className="nav__link" >Forsíða</NavLink></li>
                <li><NavLink to={'/app'} className="nav__link" >Vefir og smáforrit</NavLink></li>
                <li><NavLink to={'/resources'} className="nav__link" >Þjónustur</NavLink></li>
                <li><NavLink to={'/users'} className="nav__link" >Notendur</NavLink></li>
            </ul>
        </nav>
    </div>
)

export default Nav;
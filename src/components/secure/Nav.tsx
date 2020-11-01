import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav__container">
        <nav className="nav__navigation">
            <ul>
                <li><Link to={'/clients'} className="nav__link" >Vefir og smáforrit</Link></li>
                <li><Link to={'/resources'} className="nav__link" >Þjónustur</Link></li>
                <li><Link to={'/users'} className="nav__link" >Notendur</Link></li>
            </ul>
        </nav>
    </div>
)

export default Nav;
import './Logo.css';
import React from 'react';
import Logo from '../../Assets/Imgs/logo.png'
import { Link } from 'react-router-dom';

export default props => 
    <aside className="logo">
        <Link to="/Home" className="logo">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import React from 'react';

import { Outlet } from 'react-router-dom';

//components

import Logo from '../Template/Logo';
import Nav from   '../Template/Nav';
import Footer from '../Template/Footer';



export default function Home(){
    return(
        <div className="App">
        <Logo />
        <Nav />
        <Outlet />
        <Footer />
    </div>
    )
}

    

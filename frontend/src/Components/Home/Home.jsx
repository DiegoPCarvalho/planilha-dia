import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import React from 'react';

import { Outlet } from 'react-router-dom';

//components
import MenuIndexHam from '../Navbar/Menu/Index';
import Footer from '../Template/Footer';



export default function Home() {
    return (
        <div className="App">
            <MenuIndexHam />
            <Outlet />
            <Footer />
            {Logado()}
        </div>
    )

    function Logado() {
        if (localStorage.length === 0) {
            window.location.pathname = '/'
        } else
            if (localStorage.logado === "0") {
                window.location.pathname = '/'
            }
    }
}




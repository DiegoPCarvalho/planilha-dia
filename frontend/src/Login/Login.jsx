import React from "react";
import './Login.css';

import { Outlet } from "react-router";



export default function Login() {
    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center">
                <Outlet />
            </div>
        </div>
    )
}





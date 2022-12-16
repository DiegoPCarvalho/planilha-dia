import React from "react";
import './Login.css';

import { Outlet } from "react-router";



export default function Login() {
    return (
        <div className="login">
            <div className="formLogin">
                <Outlet />
            </div>
        </div>
    )
}





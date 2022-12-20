import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Login from '../Login/Login';
import LoginMain from "../Login/LoginMain";
import NovoLogin from '../Login/NovoLogin';
import Home from '../Components/Home/Home';
import AtividadeCrud from '../Components/Atividades/AtividadeCrud';

import CrudAtividade from '../Components/Atividade/CrudAtividade';


export default function Rotas(){
    return(
        <Routes>
        <Route exact path="/" element = {<Login />}>
            <Route index element={<LoginMain />}/>
            <Route path="/NovoUsuario" element={<NovoLogin />}/>
        </Route>
        <Route path="/Dashboard" element = {<Home />}>
            <Route index element={<AtividadeCrud />}/>
        </Route>
        <Route path="/Atividade" element={<Home />}>
            <Route index element={<CrudAtividade />} />
        </Route>
        <Route path="*" element = {<Login />}/>
    </Routes>
    )
}
    

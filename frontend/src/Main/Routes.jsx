import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Login from '../Login/Login';
import LoginMain from "../Login/LoginMain";
import NovoLogin from '../Login/NovoLogin';
import Home from '../Components/Home/Home';
import AtividadeCrud from '../Components/Atividades/AtividadeCrud';

import CrudAtividade from '../Components/Atividade/CrudAtividade';
import Formulario from "../Components/Atividade/Formulario";
import Tabela from "../Components/Atividade/Tabela";


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
        <Route element={<Home />}>
            <Route path="/Atividade"element={<CrudAtividade />}>
                <Route path="Formulario" element={<Formulario />} />
                <Route path="Tabela" element={<Tabela />}/>
            </Route>
        </Route>
        <Route path="*" element = {<Login />}/>
    </Routes>
    )
}
    

import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Login from '../Login/Login';
import LoginMain from "../Login/LoginMain";
import NovoLogin from '../Login/NovoLogin';
import Home from '../Components/Home/Home';


import CrudAtividade from '../Components/Atividade/CrudAtividade';
import Formulario from "../Components/Atividade/Formulario";
import Tabela from "../Components/Atividade/Tabela";
import RelatorioPessoal from '../Components/RelatorioPessoal/RelatorioPessoal';

//dashboard
import DashboardDiretoria from "../Components/Dashboard/DashboardDiretoria";
import DashboardGerencia from "../Components/Dashboard/DashboardGerencia";
import DashboardTecnico from "../Components/Dashboard/DashboardTecnicos";
import DashboardHome from "../Components/Dashboard/DashboardHome";

export default function Rotas(){
    return(
        <Routes>
        <Route exact path="/" element = {<Login />}>
            <Route index element={<LoginMain />}/>
            <Route path="/NovoUsuario" element={<NovoLogin />}/>
        </Route>
        <Route path="/Dashboard" element = {<Home />}>
                <Route index element={<DashboardHome />} />
                <Route path="Gerencia" element={<DashboardGerencia />}/>
                <Route path="Diretoria" element={<DashboardDiretoria />}/>
                <Route path="Tecnico" element={<DashboardTecnico />}/>

        </Route>
        <Route element={<Home />}>
            <Route path="/Atividade"element={<CrudAtividade />}>
                <Route path="Formulario" element={<Formulario />} />
                <Route path="Tabela" element={<Tabela />}/>
                <Route path="Relatorio" element={<RelatorioPessoal/>}/>
            </Route>
        </Route>
        <Route path="*" element = {<Login />}/>
    </Routes>
    )
}
    

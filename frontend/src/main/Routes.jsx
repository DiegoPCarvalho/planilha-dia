import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Login from '../Login/Login';
import LoginMain from "../Login/LoginMain";
import NovoLogin from '../Login/NovoLogin';
import Home from '../Components/Home/Home';
import AtividadeCrud from '../Components/Atividades/AtividadeCrud';

// import Relatorio from "../components/Relatorio/Relatorio";

export default props =>(
    <Routes>
        <Route exact path="/" element = {<Login />}>
            <Route index element={<LoginMain />}/>
            <Route path="/NovoUsuario" element={<NovoLogin />}/>
        </Route>
        <Route path="/Atividade" element = {<Home />}>
            <Route index element={<AtividadeCrud />}/>
        </Route>
        {/* <Route path="/relatorio" element = {<Relatorio />}/> */}
        <Route path="*" element = {<Login />}/>
    </Routes>
);
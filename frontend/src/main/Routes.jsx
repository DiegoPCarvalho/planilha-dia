import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Home from '../components/home/Home';
import AtividadeCrud from '../components/atividades/AtividadeCrud';
import NovaAtividade from '../components/atividades/NovaAtividade';
import Relatorio from "../components/Relatorio/Relatorio";

export default props =>(
    <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/atividade" element = {<AtividadeCrud />}/>
        <Route path="/relatorio" element = {<Relatorio />}/>
        <Route path="*" element = {<Home />}/>
    </Routes>
);
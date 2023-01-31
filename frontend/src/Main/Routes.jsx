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
import DashboardGerencia from "../Components/Dashboard/DashboardGerencia";
import DashboardDiretoria from "../Components/Dashboard/DashboardDiretoria";


//Em Breve
import EmBreve from "../Components/EmBreve/EmBreve";
import EmBreveSmart from "../Components/EmBreve/EmBreveSmart";

//Perfil
import Perfil from '../Components/Usuario/Perfil';

//setores
//financeiro
import Financeiro from "../Components/Setores/Financeiro/Financeiro";
import CadastroCusto from '../Components/Setores/Financeiro/CadastroCusto';
import CentroCusto from "../Components/Setores/Financeiro/CentroCusto";

//Diretoria
import Diretoria from '../Components/Setores/Diretoria/HomeLabDiretoria';
import DashboardHomeDiretoria from "../Components/Setores/Diretoria/DashboradsLabDiretoria";
import CentroCustoDiretoria from '../Components/Setores/Diretoria/CentroCustoLabDiretoria';

//Gerencia
import HomeGerenciaLab from '../Components/Setores/Gerencia/HomeLabGerencia';
import DashboardHomeGerencia from "../Components/Setores/Gerencia/DashboardLabGerencia";
import CentroCustoLabGerencia from '../Components/Setores/Gerencia/CentroCustoLabGerencia';
import HomeGerenciaAdm from '../Components/Setores/Gerencia/HomeADMGerencia';
import PageFinanceiro from "../Components/Setores/Gerencia/PageFinanceiro";
import PageFinanceiroPro from '../Components/Setores/Gerencia/PageFinanceiroProcess';

//Laboratorio
import CentroCustoLab from '../Components/Setores/Laboratorio/CentroCusto';
import EmAnaliseLab from "../Components/Setores/Laboratorio/EmAnalise";
import FinaliadosLab from "../Components/Setores/Laboratorio/FinalizadosLab";

//Solicitar
import Solicitar from '../Components/Setores/Solicitar/Solicitar';


export default function Rotas() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />}>
                <Route index element={<LoginMain />} />
                <Route path="/NovoUsuario" element={<NovoLogin />} />
            </Route>
            <Route path="/Home" element={<Home />}>
                <Route index element={<EmBreve />} />
            </Route>
            <Route element={<Home />}>
                <Route path="/DiretoriaLab" element={<Diretoria />}>
                    <Route path="Dashboard" element={<DashboardHomeDiretoria />}>
                        <Route path="DashboardAtividade" element={<DashboardDiretoria />} />
                        <Route path="DashboardCentroCusto" element={<EmBreveSmart />} />
                    </Route>
                    <Route path="CentroCusto" element={<CentroCustoDiretoria />}>
                        <Route path="Solicitacoes" element={<EmBreveSmart />} />
                        <Route path="Aprovados" element={<EmBreveSmart />} />
                        <Route path="Reprovados" element={<EmBreveSmart />} />
                        <Route path="Finalizados" element={<EmBreveSmart />} />
                    </Route>
                </Route>

                <Route path="Gerencia" element={<DashboardGerencia />} />
            </Route>
            <Route element={<Home />}>
                <Route path="/GerenciaLab" element={<HomeGerenciaLab />}>
                    <Route path="Dashboard" element={<DashboardHomeGerencia />}>
                        <Route path="DashboardAtividade" element={<DashboardGerencia />} />
                        <Route path="DashboardCentroCusto" element={<EmBreveSmart />} />
                    </Route>
                    <Route path="CentroCusto" element={<CentroCustoLabGerencia />}>
                        <Route path="Solicitacoes" element={<EmBreveSmart />} />
                        <Route path="Aprovados" element={<EmBreveSmart />} />
                        <Route path="Reprovados" element={<EmBreveSmart />} />
                        <Route path="Finalizados" element={<EmBreveSmart />} />
                    </Route>
                </Route>
                <Route path="/GerenciaAdm" element={<HomeGerenciaAdm />}>
                    <Route path="Financeiro" element={<PageFinanceiro />}>
                        <Route path="Dashboard" element={<EmBreveSmart />} />
                        <Route path="CentroCusto" element={<PageFinanceiroPro />}>
                            <Route path="CadCusto" element={<CadastroCusto />} />
                            <Route path="Solicitacoes" element={<EmBreveSmart />} />
                            <Route path="Aprovados" element={<EmBreveSmart />} />
                            <Route path="Reprovados" element={<EmBreveSmart />} />
                            <Route path="Finalizados" element={<EmBreveSmart />} />
                        </Route>
                    </Route>
                    <Route path="Compras" element={<EmBreveSmart />} />
                    <Route path="Faturamento-Fiscal" element={<EmBreveSmart />} />
                    <Route path="RH-DP" element={<EmBreveSmart />} />
                    <Route path="Estoque" element={<EmBreveSmart />} />
                    <Route path="Marketing" element={<EmBreveSmart />} />
                    <Route path="Expedicao-Logistica" element={<EmBreveSmart />} />
                    <Route path="Recepcao" element={<EmBreveSmart />} />
                </Route>
            </Route>
            <Route element={<Home />}>
                <Route path="/Financeiro" element={<Financeiro />}>
                    <Route path="CentroCusto" element={<CentroCusto />}>
                        <Route path="Solicitar" element={<Solicitar />} />
                        <Route path="EmAnalise" element={<EmBreveSmart />} />
                        <Route path="Finalizados" element={<EmBreveSmart />} />
                    </Route>
                   <Route path="Solicitacoes" element={<EmBreveSmart />} />
                </Route>
            </Route>
            <Route element={<Home />}>
                <Route path="/Atividade" element={<CrudAtividade />}>
                    <Route path="Formulario" element={<Formulario />} />
                    <Route path="Tabela" element={<Tabela />} />
                    <Route path="Relatorio" element={<RelatorioPessoal />} />
                </Route>
                <Route path="/CentroCustoLab" element={<CentroCustoLab />}>
                    <Route path="Solicitar" element={<Solicitar />} />
                    <Route path="EmAnalise" element={<EmAnaliseLab />} />
                    <Route path="Finalizados" element={<FinaliadosLab />} />
                </Route>
            </Route>
            <Route path="/PerfilUsuario" element={<Home />}>
                <Route index element={<Perfil />} />
            </Route>
            <Route path="/EmBreve" element={<Home />}>
                <Route index element={<EmBreve />} />
            </Route>
            <Route path="*" element={<Login />} />
        </Routes>
    )
}


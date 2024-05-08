import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Login from '../Login/Login';
import LoginMain from "../Login/LoginMain";
import NovoLogin from '../Login/NovoLogin';
import Home from '../Components/Home/Home';

//pagehome
import NewPageHome from '../Components/Home/NewPageHome';
import CrudAtividade from '../Components/Atividade/CrudAtividade';
import FormTable from "../Components/Atividade/FormTable";
import HomeFilaTecnico from "../Components/FilaAtividade";
import RelatorioPessoal from '../Components/RelatorioPessoal/RelatorioPessoal';


//Em Breve
import EmBreve from "../Components/EmBreve/EmBreve";
import EmBreveSmart from "../Components/EmBreve/EmBreveSmart";

//Fila Tecnica
import FilaTecnica from '../Components/FilaTecnica/index';

//Perfil
import Perfil from '../Components/Usuario/Perfil';

//Ramais
import Ramal from '../Components/Ramais/Ramais';

//setores
//financeiro
import Financeiro from "../Components/Setores/Financeiro/Financeiro";
import CadastroCusto from '../Components/Setores/Financeiro/CadastroCusto';
import CentroCusto from "../Components/Setores/Financeiro/CentroCusto";
import SolicitacoesSetores from "../Components/Setores/Financeiro/SolicitacoesSetores";
import SolicitarSet from "../Components/Setores/Financeiro/Setores/SolicitacoesSet";
import AprovacaoSet from "../Components/Setores/Financeiro/Setores/AprovacaoSet";
import FinalizadosSet from "../Components/Setores/Financeiro/Setores/FinalizadosSet";

//Diretoria
import Diretoria from '../Components/Setores/Diretoria/HomeLabDiretoria';
import CentroCustoDiretoria from '../Components/Setores/Diretoria/CentroCustoLabDiretoria';
import SolicitarDir from "../Components/Setores/Diretoria/DirLaboratorio/SolicitacoesDir";
import AprovadoDir from "../Components/Setores/Diretoria/DirLaboratorio/AprovadoDir";

//Gerencia
import HomeGerenciaLab from '../Components/Setores/Gerencia/HomeLabGerencia';
import CentroCustoLabGerencia from '../Components/Setores/Gerencia/CentroCustoLabGerencia';
import HomeGerenciaAdm from '../Components/Setores/Gerencia/HomeADMGerencia';
import PageFinanceiro from "../Components/Setores/Gerencia/PageFinanceiro";
import PageFinanceiroPro from '../Components/Setores/Gerencia/PageFinanceiroProcess';
import SolicitacoesLab from "../Components/Setores/Gerencia/LaboratorioGerencia/Solicitacoes";
import AprovadosLab from "../Components/Setores/Gerencia/LaboratorioGerencia/Aprovados";
import TabelaGeral from "../Components/Setores/Gerencia/LaboratorioGerencia/TabelaGeral";
import IndexDash  from "../Components/Dashboard/DashboardModel/Index";

//Laboratorio
import CentroCustoLab from '../Components/Setores/Laboratorio/CentroCusto';
import EmAnaliseLab from "../Components/Setores/Laboratorio/EmAnalise";
import FinaliadosLab from "../Components/Setores/Laboratorio/FinalizadosLab";
import Contratos from "../Components/Setores/Laboratorio/Contratos";
import IndexLab from '../Components/Atividade/indexLab';
import FormTeste from '../Components/Atividade/FormularioPage/Formulario';
import TabTeste from   '../Components/Atividade/TabelaPage/Tabela';

//Compras
import HomeCompras from "../Components/Setores/Compras/HomeCompras";
import ComprasCentroCustoSetores from "../Components/Setores/Compras/CentroCustoSetores";
import SolicitarSeto from "../Components/Setores/Compras/Setores/SolicitacoesSeto";

//Solicitar
import Solicitar from '../Components/Setores/Solicitar/Solicitar';
import FinalizadosLab from "../Components/Setores/Laboratorio/FinalizadosLab";

//suporte
import PainelSuporte from '../Components/PainelSuporte/Index';
import Avulso from '../Components/PainelSuporte/Avulso/Avulso';
import Contrato from '../Components/PainelSuporte/Contrato/Contrato';


export default function Rotas() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />}>
                <Route index element={<LoginMain />} />
                <Route path="/NovoUsuario" element={<NovoLogin />} />
            </Route>
            <Route path="/Home" element={<Home />}>
                <Route index element={<NewPageHome />} />
            </Route>
            <Route path="/Ramais" element={<Home />}>
                <Route index element={<Ramal />} />
            </Route> 
            <Route element={<Home />}>
                <Route path="/Diretoria" element={<Diretoria />}>
                    <Route path="Dashboard" element={<IndexDash />}>
                        <Route path="DashboardCentroCusto" element={<EmBreveSmart />} />
                    </Route>
                    <Route path="CentroCusto" element={<CentroCustoDiretoria />}>
                        <Route path="Solicitacoes" element={<SolicitarDir />} />
                        <Route path="Aprovados" element={<AprovadoDir />} />
                        <Route path="Finalizados" element={<FinaliadosLab />} />
                    </Route>
                </Route>
            </Route>
            <Route element={<Home />}>
                <Route path="/Gerencia" element={<HomeGerenciaLab />}>
                    <Route path="Dashboard" element={<IndexDash />}>
                    </Route>
                    <Route path="CentroCusto" element={<CentroCustoLabGerencia />}>
                        <Route path="Solicitacoes" element={<SolicitacoesLab />} />
                        <Route path="Aprovados" element={<AprovadosLab />} />
                        <Route path="Finalizados" element={<FinalizadosLab />} />
                    </Route>
                    <Route path="FilaTecnica" element={<FilaTecnica />}/>
                    <Route path="TabelaGeral" element={<TabelaGeral />}/>
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
                    <Route path="CentroCustoSetores" element={<SolicitacoesSetores />}>
                        <Route path="Solicitacoes" element={<SolicitarSet />} />
                        <Route path="Aprovados" element={<AprovacaoSet />} />
                        <Route path="Finalizados" element={<FinalizadosSet />} />
                    </Route>
                </Route>
            </Route>
            <Route element={<Home />}>
                <Route path="/Compras" element={<HomeCompras />}>
                    <Route path="CadastroItem" element={<EmBreveSmart />}/>
                    <Route path="CentroCusto" element={<EmBreveSmart />}/>
                    <Route path="CentroCustoSetores" element={<ComprasCentroCustoSetores />}>
                        <Route path="Solicitacoes" element={<SolicitarSeto />} />
                        <Route path="Finalizados" element={<FinalizadosSet />} />
                    </Route>
                </Route>
            </Route>
            <Route element={<Home />}>
                <Route path="/Laboratorio" element={<CrudAtividade />}>
                    <Route path="Atividade" element={<FormTable />} />
                    <Route path="FilaAtividade" element={<HomeFilaTecnico />} />                    
                    <Route path="Relatorio" element={<RelatorioPessoal />} />
                </Route>
                <Route path="/CentroCustoLab" element={<CentroCustoLab />}>
                    <Route path="Solicitar" element={<Solicitar />} />
                    <Route path="EmAnalise" element={<EmAnaliseLab />} />
                    <Route path="Finalizados" element={<FinaliadosLab />} />
                </Route>
                <Route path="/teste" element={<IndexLab />}>
                    <Route path="Formulario" element={<FormTeste />} />
                    <Route path="Tabela" element={<TabTeste />} />
                </Route>
                <Route path="/Contratos" element={<Contratos/>}/>
            </Route>
            <Route path="/Usuario" element={<Home />}>
                <Route index element={<Perfil />} />
            </Route>
            <Route element={<Home />}>
                <Route path="/Painel%20Suporte" element={<PainelSuporte />}>
                    <Route path="Avulso" element={<Avulso />} />
                    <Route path="Contrato" element={<Contrato />} />
                </Route>
            </Route>
            <Route path="/EmBreve" element={<Home />}>
                <Route index element={<EmBreve />} />
            </Route>
            <Route element={<Login />}>
                <Route path="*" element={<LoginMain />} />
            </Route>
        </Routes>
    )
}


import React from "react";
import './Navbar.css';
import $ from "jquery";
import { Link } from 'react-router-dom';

export default props =>
    <div id="accordian">
        <ul className="show-dropdown">
            <li>
                <a href="javascript:void(0);" className='text-light'><i className="fa fa-credit-card"></i>Diretoria</a>
                <ul>
                    <li><Link to="/Diretoria" className='text-light'><i className="fa fa-barcode"></i>Laboratório</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-archive"></i>ADM</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-clone"></i>Comercial</Link></li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0);" className='text-light'><i className="fa fa-bar-chart"></i>Gerência</a>
                <ul>
                    {/* <li><Link to="/Dashboard" className='text-light'><i className="fa fa-home"></i>Home</Link></li> */}
                    <li><Link to="/Dashboard/Gerencia" className='text-light'><i className="fa fa-barcode"></i>Laboratório</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-archive"></i>ADM</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-clone"></i>Comercial</Link></li>
                    {/* <li><Link to="/Dashboard/Tecnico" className='text-light'><i className="fa fa-university"></i>Técnicos</Link></li> */}
                </ul>
            </li>
            <li>
                <a href="javascript:void(0);" className='text-light'><i className="fa fa-barcode"></i>Laboratório</a>
                <ul>
                    <li><Link to="/Atividade" className='text-light'><i className="fa fa-newspaper-o"></i>Atividade</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-usd"></i>Centro Custo</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-cogs"></i>Cadastro de Peça</Link></li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0);" className='text-light'><i className="fa fa-archive"></i>ADM</a>
                <ul>
                    <li><Link to="/Financeiro" className='text-light'><i className="fa fa-money"></i>Financeiro</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-shopping-cart"></i>Compras</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-file-text-o"></i>Faturamento/Fiscal</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-handshake-o"></i>RH e DP</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-stack-overflow"></i>Estoque</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-stack-overflow"></i>Marketing</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-gift"></i>Expedição</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-truck"></i>Logística</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-users"></i>Recepção</Link></li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0);" className='text-light'><i className="fa fa-clone"></i>Comercial</a>
                <ul>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-newspaper-o"></i>Coodenador de Projetos</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-usd"></i>Vendedores</Link></li>
                    <li><Link to="/EmBreve" className='text-light'><i className="fa fa-cogs"></i>Assistentes</Link></li>
                </ul>
            </li>
            <li>
                {/* <ul>
            <li><a href="javascript:void(0);" className='text-light'>Current Month</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Current Week</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Previous Month</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Previous Week</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Next Month</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Next Week</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Team Calendar</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Private Calendar</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Settings</a></li>
        </ul> */}
            </li>
            <li>
                <a href="javascript:void(0);" className='text-light'><i class="fa fa-address-book"></i>Usuario</a>
                <ul>
                    <li><Link to="/PerfilUsuario" className='text-light' id="meu-link"><i className="fa fa-user-plus"></i>Perfil</Link></li>
                    <li><a onClick={sair} className='text-light' id="meu-link"><i className="fa fa-sign-out"></i>Sair</a></li>
                </ul>
            </li>
            {/* <li>
        <a href="javascript:void(0);" className='text-light'><i className="fa fa-user"></i>Charts</a>
        <ul>
            <li><a href="javascript:void(0);" className='text-light'>Global favs</a></li>
            <li><a href="javascript:void(0);" className='text-light'>My favs</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Team favs</a></li>
            <li><a href="javascript:void(0);" className='text-light'>Settings</a></li>
        </ul>
    </li> */}
        </ul>
    </div>

function sair() {
    if (localStorage.logado === "1") {
        window.location.pathname = "/";
        localStorage.logado = 0;
    }
}




$(document).ready(function () {
    $("#accordian a").click(function () {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function () {
            if (++count == closest_ul.find("ul").length) {
                parallel_active_links.removeClass("active");
                parallel_active_links.children("ul").removeClass("show-dropdown");
            }
        });

        if (!link_status) {
            closest_li.children("ul").slideDown().addClass("show-dropdown");
            closest_li.parent().parent("li.active").find('ul').find("li.active").removeClass("active");
            link.parent().addClass("active");
        }
    })
});


// --------for-active-class-on-other-page-----------
$(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == '') {
        path = 'index.html';
    }

    var target = $('#accordian li a[href="' + path + '"]');
    // Add active class to target link
    target.parents("li").addClass('active');
    target.parents("ul").addClass("show-dropdown");
});
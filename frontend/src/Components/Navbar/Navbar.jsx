import React from "react";
import './Navbar.css';
import $ from "jquery";
import { Link } from 'react-router-dom';

export default props =>
<div id="accordian">
<ul className="show-dropdown">
    <li>
        <a href="javascript:void(0);" className='text-light'><i className="fa fa-bar-chart"></i>Dashboard</a>
        <ul>
            <li><Link to="/Dashboard" className='text-light'><i className="fa fa-database"></i>Gerência</Link></li>
            <li><Link to="/Dashboard/AtendimentoOnSite" className='text-light'><i className="fa fa-sitemap"></i>Diretoria</Link></li>
            <li><Link to="/Dashboard/Contrato" className='text-light'><i className="fa fa-university"></i>Técnicos</Link></li>
        </ul>
    </li>
    <li>
        <a href="javascript:void(0);" className='text-light'><i className="fa fa-clone"></i>Ordem de Serviço</a>
        <ul>
            <li><Link to="/Atividade" className='text-light'><i className="fa fa-newspaper-o"></i>Atividade</Link></li>
            <li><Link to="/OrdemServico/MpContrato" className='text-light'><i className="fa fa-files-o"></i>Relatório Pessoal</Link></li>
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
                <li><a onClick={sair}   className='text-light' id="meu-link"><i className="fa fa-sign-out"></i>Sair</a></li>
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
    if(localStorage.logado === "1"){
        window.location.pathname = "/";
        localStorage.logado = 0;
    }
}




$(document).ready(function() {
    $("#accordian a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length){
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
$(document).ready(function($){
  	// Get current path and find target link
  	var path = window.location.pathname.split("/").pop();
  
  	// Account for home page with empty path
  	if ( path == '' ) {
    	path = 'index.html';
  	}
     
  	var target = $('#accordian li a[href="'+path+'"]');
  	// Add active class to target link
  	target.parents("li").addClass('active');
  	target.parents("ul").addClass("show-dropdown");
});
import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
  <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Inicio
        </Link>
        <Link to="/atividade">
            <i className="fa fa-newspaper-o"></i> Atividade
        </Link>
        <Link to="/relatorio">
            <i className="fa fa-database"></i> Relatório
        </Link>
      </nav>
  </aside>
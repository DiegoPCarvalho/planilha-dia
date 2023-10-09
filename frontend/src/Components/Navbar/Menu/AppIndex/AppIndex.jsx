import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import MenuButton from '../MenuButton/MenuButton';
import Menu from '../MenuIndex/MenuIndex';
import Logo from '../../../../Assets/Imgs/logo.png';
import './MenuItem.css';

import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    return this.setState({ menuOpen: false });
  }

  render() {
    const styles =
    {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#464e52',
        width: 250,
        fontFamily: 'Lobster',
      },
      logo: {
        marginLeft: 30,
        height: 50,
        width: 190
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease',
      },
      link: {
        textDecoration: 'none',
        color: '#fff',
        hover: {
          background: 'linear-gradient(135deg, #07a7e3 0%, #32dac3 100%)'
        }
      }
    }
    const menu = validarAdm()
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick(); }}>
          <div className='link-hover'>
            <Link style={styles.link} to={`/${val}`}><i className={`fa fa-${validarIcon(val)} mx-1`}></i> {val}</Link>
          </div>
        </MenuItem>)
    });

    return (
      <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />
          <Link to='/Home'> <div ><img src={Logo} alt="logo" style={styles.logo} /></div></Link>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      </div>
    )
  }
}

function validarIcon(valor) {
  if (valor === 'Diretoria') { return 'credit-card' }
  else if (valor === 'Gerencia') { return 'bar-chart' }
  else if (valor === 'Laboratorio') { return 'barcode' }
  else if (valor === 'Contratos') { return 'file-pdf' }
  else if (valor === 'Usuario') { return 'address-book' }
  else { return 'copy' }
}

function validarAdm() {
  if (localStorage.AdmGeral === "1") { return ['Diretoria', 'Gerencia', 'Laboratorio', 'Contratos', 'Usuario'] }
  else if (localStorage.AdmDiretoria === "1") { return ["Diretoria", "Usuario"] }
    else if (localStorage.AdmGerencia === "1") {
      if (localStorage.AdmLaboratorio === "1") {
        return ["Gerencia", "Laboratorio", "Usuario"]
      } else {
        return ["Gerencia", "Usuario"]
      }
    }
    else if (localStorage.AdmLaboratorio === "1") { return ["Laboratorio", "Usuario"] }
}


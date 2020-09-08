import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import '../../assets/css/partials/Header.css'
// require('../../assets/css')

function Header() {
  return (
    <header className="header ">
        <Link to="/"><img src={require('../../assets/img/icons/back.svg')} alt="" srcset=""/></Link>
        <h1>grau zica</h1>
    </header>
  );
}
export default Header;
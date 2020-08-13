import React from 'react';
import './style.css';
// import '../../assets/css/partials/Header.css'
// require('../../assets/css')

function Header() {
  return (
    <header class="header ">
        <a href="/"><img src={require('../../assets/img/icons/back.svg')} alt="" srcset=""/></a>
        <h1>grau zica</h1>
    </header>
  );
}
export default Header;
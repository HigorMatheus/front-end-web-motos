import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
// import '../../assets/css/partials/Header.css'
// require('../../assets/css')
// import isAuthenticated from '../../services/auth'
import { isAuthenticated, logout } from '../../services/auth';

function Header() {
  const history = useHistory()
  return (
    <header className="header ">
        <Link to="/"><img src={require('../../assets/img/icons/back.svg')} alt="" srcset=""/></Link>
        {/* {isAuthenticated()? (
                        // <p>sair</p>
                        <h1 className="button" onClick={()=>{logout(null);return history.push('/')} }>sair</h1>
                    ): <Link className="button" to="./login"> login</Link>}
                   */}
        <h1>grau zica</h1>
    </header>
  );
}
export default Header;
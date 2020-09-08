import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, logout } from '../../services/auth';
// import '../../assets/css/partials/home.css'
// require('../../assets/css')

// import logout from '../../services/auth'

function Home() {
    const history = useHistory()
  return (
    <div  id="page-home">
        <section id="content" className="container">
            <h1>grau zica</h1>

            <div id="sud-title-site">
                <p>Este site foi criado para os amantes do grau </p>
            </div>
        
            <img className="img-main" src={require('../../assets/img/grau.png')} alt=""/>
            <div className="menu">
                    <Link className="button" to="./historia">Historia</Link>
            
                    <Link className="button" to="./photos">ver Photos</Link>
                    {isAuthenticated()? (
                        // <p>sair</p>
                        <button className="button" onClick={()=>{logout(null);return history.push('/')} }>sair</button>
                    ): <Link className="button" to="./login"> login</Link>}
            </div>
            
            <div className="sobre">
                <p>estamos com 200 fotos compartilhadas</p>
            </div>
        </section>
     </div>
  );
}
export default Home;
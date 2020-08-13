import React from 'react';
import './style.css';
// import '../../assets/css/partials/home.css'
// require('../../assets/css')

function Home() {
  return (
    <div  id="page-home">
        <section id="content" className="container">
            <h1>grau zica</h1>

            <div id="sud-title-site">
                <p>Este site foi criado para os amantes do grau </p>
            </div>
        
            <img className="img-main" src={require('../../assets/img/grau.png')} alt=""/>
            <div className="menu">
                    <a className="button" href="./historia">Historia</a>
            
                    <a className="button" href="./photos">ver Photos</a>
            
                    <a className="button" href="./createPost"> Add Photos</a>
            </div>
            
            <div className="sobre">
                <p>estamos com 200 fotos compartilhadas</p>
            </div>
        </section>
        <footer className="footer">
                
        </footer>
     </div>
  );
}
export default Home;
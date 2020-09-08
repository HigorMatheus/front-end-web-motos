import React from 'react';
import './style.css';
import Header from '../../components/header/index'
// import Footer from '../../components/footer';
// import '../../assets/css/partials/History.css'
// require('../../assets/css')

function History() {
  return (
      <div id="page-history">
        <Header/>
        <section id="contener-history" class=" container contener-history">
            <h1>Nossa Historia</h1>
            <p>Este site foi criado por pai e filho (Dirlei, Matheus) com o principal proposito de reunir em um so local, todos os amantes desta arte do grau, denominado por alguns como surfistas do asfalto. </p>
            <p>A ideia principal é receber fotos, videos e ter curtidas e comentarios, ou seja uma rede social voltado a motos, colocando a costumização, grau, motos originais vintage</p>
            
        </section>

      </div>
  );
}
export default History;
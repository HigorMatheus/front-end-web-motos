import React from 'react';
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import Post from '../../components/Post';
// import '../../assets/css/partials/History.css'
// require('../../assets/css')

function History() {
  return (
        <div id="page-photos">
            <Header/>
            <div>
                <h1>photos</h1> 
                <form action="">
                    <div class="form">
                        <input class=".input-block" type="text"/>
                        <button type="submit">buscar</button>
                    </div>
                </form>
            </div>
            <section id="contener-photos" class=" contener-history">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </section>
            <div class="pagnacao">
                <h1>voltar</h1>  <h1>avancar</h1>
            </div>
            <Footer/>
        </div>
  );
}
export default History;
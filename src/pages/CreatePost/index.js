import React from 'react';
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
// import '../../assets/css/partials/History.css'
// require('../../assets/css')

function CriatePost() {
  return (
      <div id="page-history">
        <Header/>
            <section id="contener-create-post" class=" container contener-create-post">
                <div class="create-post">
                    <form action="savephotos" method="POST">
                        <fieldset id="user" class="fild-create">
                            <legend> seus dados </legend>
                            <div  >
                                <div class="camp-form">
                                    <label class="label-input" for="name">name</label>
                                    <input class="input-block" name="name" id="name" type="text" required/>
                                </div>
                                <div class="camp-form">
                                        <label for="email">email</label> 
                                        <input class="input-block " id="email" name="email" type="text" required/>
                                </div>
                            </div>
                        </fieldset> 
                            
                        <fieldset id="fild-create-post" class="fild-create-post">
                            <legend>ADD / Photos</legend> 
                            <div class="postagem">
                    
                                <div class="camp-form">
                                    <label for="avatar">photo <span>link (http:// )</span> </label>
                                    <input class="input-block " name="avatar" type="link" required/>
                                </div>
                                <div class="camp-form">
                                    <label for="description">descricao</label>
                                    <textarea class="textarea-block " name="description" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit">enviar</button>
                    </form>
                </div>
            </section>
        <Footer/>
      </div>
  );
}
export default CriatePost;
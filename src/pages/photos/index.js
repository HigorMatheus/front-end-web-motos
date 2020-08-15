import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import Post from '../../components/Post';
import axios from 'axios'
// import '../../assets/css/partials/History.css'
// require('../../assets/css')

function History() {
    // const [ photos, setPhotos] = useState([])

    // useEffect(()=>{
    //  axios.get('http://127.0.0.1:3333/photos').then( response=>{
    //     //  console.log(response);
    //      setPhotos(response.data)
    //  },[])
    // },[])
  return (
        <div id="page-photos">
            <Header/>
            <div>
                <h1>photos</h1> 
                {/* <form action="">
                    <div class="form">
                        <input class=".input-block" type="text"/>
                        <button type="submit">buscar</button>
                    </div>
                </form> */}
            </div>
            <section id="contener-photos" class=" contener-history">
                {/* {photos.map(photo=>{
                    return(
                        <div class="photo">
                            <button type="button" id="modal">
                                <img src={photo.avatar} alt="" srcset=""/>
                            </button>
                        </div>
                    )
                })} */}
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
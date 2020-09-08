import React,{ useEffect, useState} from 'react';
import './style.css';
import Header from '../../components/header/index'
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Photos() {
    const [ photos, setPhotos] = useState([])

  useEffect(()=>{
   api.get('/post').then( response=>{
      const photos =response.data;
      console.log(photos);
       setPhotos(photos)
   })
  },[])
//  function  detailPhoto(id){
    
//     return  <Link to={`/photo/${id}`}/>
    
//   }
  return (
        <div id="page-photos">
            <Header/>
            <div>
                <h1>photos</h1>
            </div>
            <section id="contener-photos">
            {photos.map(photo=>{
          return(
              <div className="photo">
                <Link to={`/photos/${photo.id}`}>
                    <img className="image" src={photo.imagem_url} alt="" srcset=""/>
                </Link>
                
              </div>
          )
      })}
            </section>
            <div className="pagnacao">
                {/* <h1>voltar</h1>  <h1>avancar</h1> */}
            </div>
            {/* <Footer/> */}
        </div>
  );
}
export default Photos;
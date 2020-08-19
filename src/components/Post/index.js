import React, { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios'
import Modal from '../Modall/index';




function Photos() {
  const [ photos, setPhotos] = useState([])

  useEffect(()=>{
   axios.get('http://127.0.0.1:3333/photos').then( response=>{
       console.log(response.data);
       setPhotos(response.data)
   })
  },[])
  const[isModalVisible, setIsModallVisible ] = useState(false)
  return (
    <>
      {photos.map(photo=>{
          return(
              <div class="photo">
                <img  onClick={()=>{setIsModallVisible(true)}} src={photo.avatar} alt="" srcset=""/>
               
              </div>
          )
      })}

    </>
  );
}
export default Photos;
import React from 'react';
import { useHistory} from 'react-router-dom'

import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import { Form } from '@unform/web'
import Input from '../../components/Form/input'
import axios from 'axios'

const CriatePost = () => {
    const history = useHistory()
    async function handleSubmit(data){
        console.log(data);
       const photo = await axios.post('http://127.0.0.1:3333/photos', data)

       if(photo){
       console.log(photo);
       return history.push("/photos")
       }
    }
  return (
      <div id="page-history">
        <Header/>
            <section id="contener-create-post" className=" container contener-create-post">
                <div className="create-post">
                    <Form onSubmit={handleSubmit} action="" method="">
                    <fieldset id="user" className="fild-create">
                            <legend> seus dados </legend>
                            <div  >
                                <div className="camp-form">
                                    <label className="label-input" for="name">name</label>
                                    <Input className="input-block" name="name" id="name" type="text" required/>
                                </div>
                                <div className="camp-form">
                                        <label for="email">email</label> 
                                        <Input className="input-block " id="email" name="email" type="text" required/>
                                </div>
                            </div>
                        </fieldset> 
                            
                        <fieldset id="fild-create-post" className="fild-create-post">
                            <legend>ADD / Photos</legend> 
                            <div className="postagem">
                                <div className="camp-form">
                                    <label for="avatar">photo <span>link (http:// )</span> </label>
                                    <Input className="input-block " name="avatar" type="link" required/>
                                </div>
                                <div className="camp-form">
                                    <label for="description">descricao</label>
                                    <Input classNameName="textarea-block " name="description" />
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" >enviar</button>
                    </Form>
                    {/* <form action="savephotos" method="POST"> */}
                        
                    {/* </form> */}
                </div>
            </section>
        <Footer/>
      </div>
  );
}
export default CriatePost;
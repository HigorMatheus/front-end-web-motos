import React from 'react';
import { useHistory} from 'react-router-dom'
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import { Form } from '@unform/web'
import ImageInput from '../../components/Form/imputFile';
import api from '../../services/api';
import Input from '../../components/Form/input';
const CriatePost = () => {
    const history = useHistory()

    async function handleSubmit(data){

        const dados = new FormData();
        dados.append('imagem',data.imagem) 
        dados.append('description',data.description) 
        
       const photo = await api.post('/user/post', dados)

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
            
                            
                        <fieldset id="fild-create-post" className="fild-create-post">
                            <legend>ADD / post</legend> 
                            <div className="postagem">
                                <div className="camp-form">
                                    <label for="imagem">photo <span>link (http:// )</span> </label>
                                 <ImageInput className="input-block " name="imagem"></ImageInput>
                                </div>
                                <div className="camp-form">
                                    <label for="description">descricao</label>
                                    <Input classNameName="textarea-block " name="description" />
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" >enviar</button>
                    </Form>

                </div>
            </section>
        <Footer/>
      </div>
  );
}
export default CriatePost;
import React from 'react';
import { useHistory} from 'react-router-dom'
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import { Form } from '@unform/web'
import Input from '../../components/Form/input'
import api from '../../services/api';
import { login } from '../../services/auth';
const SignUp = () => {
    const history = useHistory()
    async function handleSubmit(data){
        
        if(data.password != data.confirma_password){
            alert('as senha e comfirma senha  precisam ser iquais' )
            return;
        }

        const user = await api.post('/user', data)
        if(user){
            const token =user.data.token
            login(token)
        return history.push("/photos")
        }
    
    }
  return (
      <>
      <div id="page-SignUp">
        <Header/>
            <section id="" className=" container ">
                <div className="create">
                    <Form onSubmit={handleSubmit} action="" method="">
                    <fieldset id="form-cadastro" className="fild-create">
                            <legend> cadastrese </legend>
                            
                                <div className="camp-form">
                                    <label className="label-input" for="name">name</label>
                                    <Input className="input-block" name="name" id="name" type="text" required/>
                                </div>
                                <div className="camp-form">
                                        <label className="label-input"  for="email">email</label> 
                                        <Input className="input-block " id="email" name="email" type="text" required/>
                                </div>
                                <div className="camp-form">
                                        <label className="label-input"  for="password">senha</label> 
                                        <Input className="input-block " id="password" name="password" type="password" required/>
                                </div>
                                <div className="camp-form">
                                        <label className="label-input"  for="confirma_password">comfirma senha</label> 
                                        <Input className="input-block " id="confirma_password" name="confirma_password" type="password" required/>
                                </div>
                             <button className="button-submit" type="submit" >enviar</button>
                        </fieldset> 
                    </Form>
                    {/* <form action="savephotos" method="POST"> */}
                        
                    {/* </form> */}
                </div>
            </section>
            {/* <Footer/> */}
      </div>
      
      </>
  );
}
export default SignUp;
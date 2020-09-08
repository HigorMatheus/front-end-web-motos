import React from 'react';
import { useHistory} from 'react-router-dom'
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import { Form } from '@unform/web'
import Input from '../../components/Form/input'
import api from '../../services/api';
import { login } from '../../services/auth';
const SignIn = () => {
    const history = useHistory()
    async function handleSubmit(data){
       const resLogin = await api.post('/login', data)
          const  user =resLogin.data
        //   console.log(resLogin);
       if(user){
           const token =user.token
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
                    <fieldset id="form-login" className="fild-create">
                            {/* <legend> seus dados login</legend> */}
                            <div  >
                                <div className="camp-form">
                                        <label className="label-input" for="email">email</label> 
                                        <Input className="input-block " id="email" name="email" type="text" required/>
                                </div>
                                <div className="camp-form">
                                    <label className="label-input" for="name">senha</label>
                                    <Input className="input-block" name="password" id="password" type="text" required/>
                                </div>
                            </div>
                            <button className="button-submit" type="submit" >enviar</button>

                        </fieldset> 

                        
                    </Form>
                </div>
            </section>
            {/* <Footer/> */}
      </div>
      
      </>
  );
}
export default SignIn;
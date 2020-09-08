import React,{Component} from 'react';
import './style.css';
import api from '../../services/api';
// import Header from '../../components/header/index'
// import api from '../../services/api';
import { Link } from 'react-router-dom';

class Photo extends Component {
    state={
      photo:{}
    }
  async componentDidMount(){
      const {id} =this.props.match.params
      console.log(id);
      const response = await api.get(`/photos/${id}`)
      console.log(response.data.post);
        // const photo= response.data

      this.setState({photo:response.data.post})
  }
 

    render(){
      const {photo}= this.state
      return (
          <div id="page-photo">
            <header className="header ">
                <Link to="/photos"><img src={require('../../assets/img/icons/back.svg')} alt="" srcset=""/></Link>
                <h1>grau zica</h1>
            </header>
              <section id="contener-photo-datal">
                <div className="photo-datal">
                  <img className="img-datal" src={photo.avatar_url} alt={photo.id} srcset=""/>
                </div>
                <div>
                  <p>{photo.description}</p>
                </div>
              </section>
              {/* <Footer/> */}
          </div>
    );
  }
}
export default Photo;
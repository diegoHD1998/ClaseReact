import React from 'react'
import FotoPerfil from './img/team-2.jpg'
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons' //Solido = fas
import {faFacebook, faTwitter, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'




class Barra extends React.Component{

  render(){
    return(

      <div className="navbar">
        <ul>
          <li><a>Home</a></li>
          <li><a>Stand-1</a></li>
          <li><a>Stand-2</a></li>
          <li><a>Stand-3</a></li>
        </ul>
      </div>
    )
  }
}

class BarraBaja extends React.Component{

  render(){
    return(

      <div className="barraBaja">
        <div className="Iconos"><FontAwesomeIcon icon={faFacebook}/></div>
        <div className="Iconos"><FontAwesomeIcon icon={faTwitter}/></div>
        <div className="Iconos"><FontAwesomeIcon icon={faInstagram}/></div>
        <div className="Iconos"><FontAwesomeIcon icon={faTiktok}/></div>
      </div>
    )
  }
}



class TextoBase extends React.Component{

  render() {
    return(
      <div className="Texto">
        <h2>HELLO</h2>
        <h1>I´m Elizabeth Miller</h1>
        <h3>Developer and businessman</h3>
        <hr/>
        <div className="Lista">
          <div className="Parte1">
              <ul>
                <li>Age</li>
                <li>Address</li>
                <li>E-mail</li>
                <li>Phone</li>
              </ul>
          </div>

          <div className="Parte2">
            <ul>
              <li>######</li>
              <li>######</li>
              <li>######</li>
              <li>######</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


class Imagen extends React.Component{

  render() {
    return(
      <div className="Imagen">
        <div className="CajaImagen">
          <img className="Foto" src={FotoPerfil} ></img>
        </div>
      </div>
    )
  }
}

class App extends React.Component{

  render() {
    return(

        <div className="contenedor1">
          <div className="Origen">
            <Barra/>
            <div className="Principal">
              <Imagen/>
              <TextoBase/> 
            </div>
            <BarraBaja/>
          </div>
      </div>  

    )
  }
}

export default App;

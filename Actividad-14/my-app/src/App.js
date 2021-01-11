import React from 'react'
import './App.css';
import avatar from './img/avatar_hat.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase, faAsterisk, faCertificate, faDatabase, faGlobeAmericas, faHome, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons' //Solido = fas
import {faFacebook, faInstagram, faTwitter, faTiktok, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'



class Titulos extends React.Component{
  render(){
    let titulo = this.props.titulo
    let icono = this.props.icono
    let size = this.props.size /* faBriefcase */
    return(
      <div className="Titulo" style={{fontSize:size}}>
        
        <div className="icono" ><FontAwesomeIcon icon={icono}/></div>
        
        <div><p>{titulo}</p></div>
        
      </div> 
        
    )
  }
}

class Experience extends React.Component{

  render(){
    let subtitulo = this.props.subtitulo
    let fecha = this.props.fecha
    return(
      <div>
        <div className="Sub-Titulo">
          <h3>{subtitulo}</h3>
        </div>

        <div className="Fecha" >
          <FontAwesomeIcon className="calendarioIcon" icon={faCalendarAlt}/> <h6>{fecha}</h6>
        </div>

        <p>
          Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
        </p>
        <hr/>
      </div>

    )
  }

}

class Barras extends React.Component{
  
  render(){
    let titulo = this.props.titulo
    let porcentaje = this.props.porcentaje
    return(
      <div>
        <p>{titulo}</p>

        <div className="Barra" >
          <div className="BarraInterior" style={{width:porcentaje}} >
            <p className="Valor" > {porcentaje} </p>
          </div>
        </div>

      </div>
    )
  }
}


class Informacion extends React.Component{
  render(){
    return(
      <div>
        <div className="Imagen" >
          <img className="avatar" src={avatar} />
          <h2>JANE DOE</h2>

          <div className="Info n1" >
            <Titulos titulo="Designer" icono={faBriefcase} size="17px"/>
          </div>

          <div className="Info" >
            <Titulos titulo="London, UK" icono={faHome} size="17px"/>
          </div>

          <div className="Info" >
            <Titulos titulo="Ex@gmail.com" icono={faEnvelope} size="17px"/>
          </div>

          <div className="Info" >
            <Titulos titulo="1224435534" icono={faPhone} size="17px"/>
          </div>
          
        </div>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="cajaFooter" >

        <div className="texto1">
          <p>Find me on social media.</p>
        </div>

        <div className="redes" >
          <FontAwesomeIcon className="iconos" icon={faFacebook} />
          <FontAwesomeIcon className="iconos" icon={faInstagram} />
          <FontAwesomeIcon className="iconos" icon={faTwitter} />
          <FontAwesomeIcon className="iconos" icon={faTiktok} />
          <FontAwesomeIcon className="iconos" icon={faLinkedinIn} />

          
        </div>

        <div className="texto2" >
          <p>Powered by <a>w3.css</a> </p>
        </div>

      </div>
    )
  }
}



class App extends React.Component{

  render() {
    return(
    <div>
      <div className="Contenedor" >

        <div className="Parte1" >

          <div className="Skills" >

            <Informacion/>
            
            <div className="Skills-2" >
              <hr/>
              <Titulos titulo="Skills" icono={faAsterisk} size="20px"/>
              <Barras titulo="HTML" porcentaje="90%" />
              <Barras titulo="CSS" porcentaje="85%" />
              <Barras titulo="JavaScript" porcentaje="80%" />
              <Barras titulo="NodeJs" porcentaje="75%" />
              <Barras titulo="ReactJs" porcentaje="60%" />
              <Barras titulo="Angular" porcentaje="20%" />
              <hr/>
              <Titulos titulo="Languages" icono={faGlobeAmericas} size="20px"/>
              <Barras titulo="English" porcentaje="100%" />
              <Barras titulo="Spanish" porcentaje="65%" />
              <Barras titulo="German" porcentaje="30%" />
            </div>
            
            
          </div>
        </div>

        <div className="Parte2" >

          <div className="Experience" >
            <Titulos titulo="Work Experience" icono={faBriefcase} size="30px"/>
            <Experience subtitulo="Front End Developer / w3schools.com" fecha="Jan 2015 - Jan 2016" />
            <Experience subtitulo="Web Developer / something.com" fecha="Mar 2012 - Dec 2014" />
            <Experience subtitulo="Graphic Designer / designsomething.com" fecha="Jun 2010 - Mar 2012" />
          </div>

          <div className="Certificate" >
            <Titulos titulo="Certificate" icono={faCertificate} size="30px"/>
            <Experience subtitulo="W3Schools.com" fecha="Forever" />
            <Experience subtitulo="London Business School" fecha="2013 - 2015" />
            <Experience subtitulo="School of Coding" fecha="2010 - 2013" />
          </div>

        </div>
        
      </div>

      <div className="footer" >
        <Footer/>
      </div>

    </div>
    )
  }
}




class Hola extends React.Component{
  render(){
    return(
      <div>

        <div> 
          <div>

          </div>
        </div>

      </div>

    )
  }
}


export default App;




/* 



*/
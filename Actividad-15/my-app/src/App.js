import React from 'react'
import './App.css'
import './css/Footer.css'
import './css/Contenido.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faArchive,faAddressCard,faSignOutAlt, faLink} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTwitter, faTwitch, faMandalorian} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col, Button,Image, Alert, Accordion, Card, Navbar, NavDropdown, Form, FormControl, Nav } from 'react-bootstrap';
import team2 from './image/team-2.jpg'


class Navbar1 extends React.Component{
  render(){
    return(
      <div>
        <Container fluid>

          <Row className='Barra' >
            <Col xs={3} md={'auto'} className='text-center Barras'> <a href='#1'><FontAwesomeIcon icon={faHome}/>Home</a> </Col>
            <Col xs={3} md={'auto'} className='text-center Barras'> <a href='#2'><FontAwesomeIcon icon={faArchive}/>Archivo</a> </Col>
            <Col xs={3} md={'auto'} className='text-center Barras'> <a href='#3'><FontAwesomeIcon icon={faAddressCard}/>Contacto</a> </Col>
            <Col xs={3} md={'auto'} className='ml-auto text-center Barras Final'> <a href='#4'>Salir<FontAwesomeIcon icon={faSignOutAlt}/></a> </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class Navbar2 extends React.Component{
  render(){
    return(
      <div>
        <Navbar /* className='color' */ bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link className='color1' href="#home"> <FontAwesomeIcon icon={faHome}/> Home</Nav.Link>
              <Nav.Link href="#link"> <FontAwesomeIcon icon={faLink}/> Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

class Contenido extends React.Component{
  render(){
    return(
      <div>
        <Container fluid className='Base'>
          <Row className='align-items-center'>

            <Col className='' xs={4}>

              <Image className='' src={team2} rounded fluid />

            </Col>

            <Col className='' xs={8}>

              <h3>Hello</h3>
              <h2>I´m Elizabeth Miller</h2>
              <h4>Developer and businessman</h4>
              <hr/>

              <Row className='Datos' >
                <Col xs={'auto'}>
                  <p>Age</p>
                  <p>Address</p>
                  <p>Email</p>
                  <p>Phone</p>
                </Col>

                <Col xs={'auto'}>
                  <p>:</p><p>:</p><p>:</p><p>:</p>
                </Col>
                
                <Col xs={'auto'}>
                  <p>32</p>
                  <p>Wall Street 804, New York</p>
                  <p>elizabeth@gmail.com</p>
                  <p>+569 90701746</p>
                </Col>
              </Row>


            </Col>


          </Row>
        </Container>
      </div>
    )
  }
}



class Footer extends React.Component{
  render(){
    return(
      <div>
        <Container fluid>
          <Row className='justify-content-around CajaFooter' >
            <Col className='Iconos text-center'> <a href='#1' className='enlace p-3'>  <FontAwesomeIcon icon={faFacebook}/> </a> </Col>
            <Col className='Iconos text-center'> <a href='#2' className='enlace p-3'>  <FontAwesomeIcon icon={faInstagram}/> </a> </Col>
            <Col className='Iconos text-center'> <a href='#3' className='enlace p-3'>  <FontAwesomeIcon icon={faTwitter}/> </a> </Col>
            <Col className='Iconos text-center'> <a href='#4' className='enlace p-3'>  <FontAwesomeIcon icon={faTwitch}/> </a> </Col>
            <Col className='Iconos text-center'> <a href='#5' className='enlace p-3'>  <FontAwesomeIcon icon={faMandalorian}/> </a> </Col>
          </Row>
        </Container>
      </div>
    )
  }
}






class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Navbar1/>
        </div>
        <div>
          <Contenido/>
        </div>
        <div>
          <Footer/>
        </div>
        
      </div>
    )
  }
}




























/* class Datos extends React.Component{
  render(){
    return(
      <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {this.props.nombre}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Nombre: {this.props.nombre}</li>
                <li>Email: {this.props.email}</li>
                <li>Telefono {this.props.telefono}</li>
                <li>Direccion {this.props.direccion}</li>
                <li>Region: {this.props.region}</li>
                <li>Comuna: {this.props.comuna}</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <Datos nombre='Diego Muñoz' email='diego@gmail.com' telefono='+56990701746' Direccion='El pino 845 las lomas' region='BioBio' comuna='Los Angeles' />
      </div>
    )
  }
}
 */





















/* class Contador extends React.Component{

  

  render(){
    return(
      <div>
        <div>
          <h1>El numero actual es: {this.props.valor} </h1>
        </div>

        <div>
          <button onClick={()=>{this.props.click()}} >Aumentar</button>
        </div>

        <Button variant="success">Success</Button>
        <Alert variant='danger' > hola mundo</Alert>
      </div>
    )
  }
}






class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      valorState:0
    }
  }

  aumentar(){

    this.setState({valorState: this.state.valorState+1})
  }

  render(){
    return(
      <div>
        <Contador valor={this.state.valorState} click={()=>{this.aumentar()}} />
      </div>
    )
  }
} */




export default App;

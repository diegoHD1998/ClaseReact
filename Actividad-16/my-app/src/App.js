import React from 'react'
import './App.css';
import Swal from 'sweetalert2'


class App extends React.Component{
  render(){
    return(

      <div>
        <Formulario/>
      </div>
    )
  }
}



class Formulario extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      email:'',
      telefono:'',
      nombre:'',
      direccion:'',
      region:'',
      comuna:'',
      

    }
  }

  CambiarEmail(e){
    this.setState({email:e.target.value})
  }

  CambiarTelefono(e){    
    this.setState({telefono:e.target.value})
  }

  CambiarNombre(e){
    this.setState({nombre:e.target.value})
  }

  CambiarDireccion(e){
    this.setState({direccion:e.target.value})
  }

  CambiarRegion(e){
    this.setState({region: e.target.value,})
  }
  CambiarComuna(e){
    this.setState({comuna:e.target.value})
  } 

  MostrarComunas(){
    if (this.state.region === 'Metropolitana') {

      return Comunas1.map(comuna => <option key={comuna.idc}>{comuna.name}</option>)
      
    }else if(this.state.region === 'BioBío') {

      return Comunas2.map(comuna => <option key={comuna.idc}>{comuna.name}</option>)
      
    }else if(this.state.region === 'Los Rios'){

      return Comunas3.map(comuna => <option key={comuna.idc}>{comuna.name}</option>)

    }
  }


  mensaje(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }

  

  guardar(){

    if (this.state.email === '' || this.state.telefono === '' || this.state.nombre === ''
    || this.state.direccion === '' || this.state.region === '' || this.state.comuna ==='') {
      
      Swal.fire({
        title: 'Warning',
        text: 'Todos los campos deben ser llenados',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      })
    }else{

      console.log(`Email: ${this.state.email}`)
      console.log(`Telefono: ${this.state.telefono}`)
      console.log(`Nombre: ${this.state.nombre}`)
      console.log(`Direccion: ${this.state.direccion}`)
      console.log(`Region: ${this.state.region}`)
      console.log(`Comuna: ${this.state.comuna}`)

      Swal.fire({
        title: 'Excelente',
        text: 'Los Datos han sido Guardados',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }


   
  }

 


  render(){
    return(
      <div className='container'>
        
        <form className="row g-3">
             <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={this.state.email} onChange={(e)=>{this.CambiarEmail(e)}} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Telefono</label>
          <input type="text" className="form-control" id="phone" value={this.state.telefono} onChange={(e)=>{this.CambiarTelefono(e)}}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" value={this.state.Nombre} onChange={(e)=>{this.CambiarNombre(e)}} />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Direccion</label>
          <input type="text" className="form-control" id="address" value={this.state.direccion} onChange={(e)=>{this.CambiarDireccion(e)}}/>
        </div>
      
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Region</label>
          <select id="inputState" className="form-select" onChange={(e)=> this.CambiarRegion(e) } >
            <option value >Seleccione una region</option>
            {Regiones.map(region => <option key={region.idr}>{region.name}</option>)}
          </select>
        </div> 

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Comuna</label>
          <select id="inputState" className="form-select" onChange={(e)=> this.CambiarComuna(e) }>
          <option value >Seleccione una comuna</option>
            {this.MostrarComunas()}
          </select>
        </div> 
        
              <div className="col-12">
                  <button type="button" className="btn btn-primary" onClick={()=>{this.guardar()}} >Guardar</button>
              </div>

              <div className="col-12">
                  <button type="button" className="btn btn-dark" onClick={()=>{this.mensaje()}} >Click</button>
              </div>
              
      </form>

      </div>
    )
  }
}


export default App;


let Regiones = [
  {idr:'1',name:'Metropolitana'},
  {idr:'2',name:'BioBío'},
  {idr:'3',name:'Los Rios'},
];

let Comunas1 =[
  {idc:'01',name:'Santiago'},
  {idc:'02',name:'La Reina'},
  {idc:'03',name:'Las Condes'},
  {idc:'04',name:'La Florida'},
];

let Comunas2 =[
  {idc:'001',name:'Concepcion'},
  {idc:'002',name:'Talcahuano'},
  {idc:'003',name:'San Pedro de la paz'},
  {idc:'004',name:'Loa Angeles'},
];

let Comunas3 =[
  {idc:'0001',name:'Valdivia'},
  {idc:'0002',name:'Los Lagos'},
  {idc:'0003',name:'Futrono'},
  {idc:'0004',name:'Osorno'},
];

















/* validarVacio(){

    

  if (this.state.email === "") {
      console.log('Campo Correo esta vacio')

  }
  else if(this.state.telefono === ""){
    console.log('Campo Telefono esta vacio')

  }
  else if(this.state.nombre === ""){
    console.log('Campo Nombre esta vacio')

  }
  else if(this.state.direccion === ""){
    console.log('Campo Direccion esta vacio')

  }else{
    console.log(`Email:${this.state.email}`)
    console.log(`Telefono:${this.state.telefono}`)
    console.log(`Nombre:${this.state.nombre}`)
    console.log(`Direccion:${this.state.direccion}`)
  } 


  


}
*/
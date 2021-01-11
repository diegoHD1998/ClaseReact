import React from 'react'
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-4 text-center' style={{backgroundColor:'green'}}>Diego</div>
            <div className='col-4' style={{backgroundColor:'red'}}>Muñoz</div>
            <div className='col-4' style={{backgroundColor:'blue'}}>Caro</div>
            <div className='col-auto' style={{backgroundColor:'orange'}}>
              <ul className=''>
                <li>Mensaje de prueba</li>
                <li>Mensaje de prueba</li>
                <li>Mensaje de prueba</li>
              </ul>
            </div>

            <div className='col-auto' style={{backgroundColor:'yellow'}}>
              <ul className=''>
                <li>Mensaje de prueba</li>
                <li>Mensaje de prueba</li>
                <li>Mensaje de prueba</li>
              </ul>
            </div>

          </div>

          

        </div>
      </div>
    )
  }
}

export default App;

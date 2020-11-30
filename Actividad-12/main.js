
let mostrarLista = async() => {
    let cont = 0
    await fetch('http://146.83.194.142:1071/~carlos/clase_12/list.php')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        let listaUsuario = ""
         data.forEach(element => {
            
            listaUsuario += `
            <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne${cont}" aria-expanded="true" aria-controls="collapseOne">
                      Collapsible Group Item #1
                    </button>
                  </h2>
                </div>

                <div id="collapseOne${cont}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <ul>
                        <li>${element.name}</li>
                        <li>${element.phone}</li>
                        <li>${element.email}</li>
                        <li>${element.adress}</li>
                        <li>${element.region}</li>
                    </ul>

                      
                  </div>
                </div>
              </div>`
              cont++
                
        }); 
        document.getElementById("listado").innerHTML = listaUsuario
        
    })
    .catch( err => console.log(err))
    
    
    
}



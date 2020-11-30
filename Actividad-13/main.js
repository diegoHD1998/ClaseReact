

let validarCampos = async() => {

    let CampoEmail = document.getElementById("email").value
    let CampoTelefono = document.getElementById("phone").value
    let CampoNombre = document.getElementById("name").value
    let CampoDireccion = document.getElementById("address").value
    let CampoRegion = document.getElementById("region").value
    let CampoComune = document.getElementById("comune").value
    if (CampoEmail == "") {
        document.getElementById("alertaDanger").style.display = 'block'
        document.getElementById("alertaDanger").innerHTML = `Email No Valido`

    }
    else if(CampoTelefono == ""){
        document.getElementById("alertaDanger").style.display = 'block'
        document.getElementById("alertaDanger").innerHTML = `Telefono No Valido`

    }
    else if(CampoNombre == ""){
        document.getElementById("alertaDanger").style.display = 'block'
        document.getElementById("alertaDanger").innerHTML = `Nombre No Valido`

    }
    else if(CampoDireccion == ""){
        document.getElementById("alertaDanger").style.display = 'block'
        document.getElementById("alertaDanger").innerHTML = `Direccion No Valido`

    }
    else if(CampoRegion == ""){
        document.getElementById("alertaDanger").style.display = 'block'
        document.getElementById("alertaDanger").innerHTML = `Region No Valido`

    }
    else if(CampoComune == ""){
        document.getElementById("alertaDanger").style.display = 'block'
        document.getElementById("alertaDanger").innerHTML = `Comuna No Valido`

    }else{
        document.getElementById("alertaDanger").style.display = 'none'
        document.getElementById("alertaSuccess").style.display = 'block'
        document.getElementById("alertaSuccess").innerHTML = `Datos Validos`

        
    }

    let resultado = await fetch('http://146.83.194.142:1071/~carlos/clase_12/save.php',{
            method:'POST',
            body:'&email='+CampoEmail+'&phone='+CampoTelefono+'&name='+CampoNombre+'&address='+CampoDireccion+'&region='+CampoRegion+'&comune='+CampoComune

        }).then( resultado => resultado.json())
        .catch( err => console.log(err))


    

}


let comuna = () => {

    let region = document.getElementById('region').value
    
    if (region == "BioBio") {
        document.getElementById('comune').innerHTML = ` 
                                                        <option>Concepcion</option>
                                                        <option>Los Angeles</option>
                                                        <option>San Pedro de la paz</option>`
    } else if(region == "Metropolitana"){
        document.getElementById('comune').innerHTML = ` 
                                                        <option>Santiago</option>
                                                        <option>La Reina</option>
                                                        <option>Las Condes</option>`
    }
    else if(region == "Araucania"){
        document.getElementById('comune').innerHTML = ` 
                                                        <option>Angol</option>
                                                        <option>Temuco</option>
                                                        <option>Renaico</option>`
    }
    else if(region == "Rios"){
        document.getElementById('comune').innerHTML = ` 
                                                        <option>Futrono</option>
                                                        <option>Los Lagos</option>
                                                        <option>Valdivia</option>`
    }
}

//http://146.83.194.142:1071/~carlos/clase_12/save.php
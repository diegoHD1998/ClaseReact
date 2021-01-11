let soloLetras1 = (event) => {
    if (event.key === '1' ||event.key === '2'|| event.key === '3'||
        event.key === '4' ||event.key === '5'||event.key === '6'|| 
        event.key === '7' ||event.key === '8'||event.key === '9'||event.key === '10') {
        event.preventDefault();
        return
    }
}

let soloLetras2 = (event) => {
    let code = (event.which) ? event.which : event.keyCode;
    
    if(code>=48 && code<=57) //Teclas de numeros
    {
      
      event.preventDefault()
      return
    }
    else if(code>=33 && code<=47) //Teclas de simbolos
    {
        event.preventDefault()
        return
    }
    else
    {
      console.log(event)
    }
}

let soloRut1 = (event) => {
    let code = (event.which) ? event.which : event.keyCode;

    if (code >=32 && code<=44 ) {
        event.preventDefault();
        return
    }
    else if (code==47) { 
        event.preventDefault();
        return
    }
    else if (code>=58 && code<=74) {
        event.preventDefault();
        return
    } else if(code>=76 && code<=106){
        event.preventDefault();
        return
    }
    else if(code>=108 && code<=126){
        event.preventDefault();
        return
    }
    else if(code>=128 && code<=254){
        event.preventDefault();
        return
    }
    
}

let soloRut12 = (event) => {

    let rut = document.getElementById('rut').value
    

    if (rut.length === 12) {
document.getElementById('rut').value = rut
        return;
        
        
    }else if(rut.length === 9){
        
        let rut2 = (rut).slice(0,2) + "." + (rut).slice(2,5) +'.'+ (rut).slice(5,8) +'-'+(rut).slice(8)
        document.getElementById('rut').value = rut2
        return;
        

    }else if(rut.length === 8){
        let rut3 = (rut).slice(0,1) + "." + (rut).slice(1,4) +'.'+ (rut).slice(4,7) +'-'+(rut).slice(7)
        document.getElementById('rut').value = rut3
        return;
        
    }
    /*
    //12345678K
    if( rut.match('/[0-9]{8}[0-9Kk]{1}/') ){
        rut2 = (rut).slice(0,2) + "." + (rut).slice(2,5) +'.'+ (rut).slice(5,8) +'-'+(rut).slice(8)
    }
    if( rut.match('/[0-9]{7}[0-9Kk]{1}/') ){
        rut2 = (rut).slice(0,1) + "." + (rut).slice(2,5) +'.'+ (rut).slice(5,8) +'-'+(rut).slice(8)
    }
    if( rut.match('/[0-9]{8}[0-9Kk]{1}/') ){
        rut2 = (rut).slice(0,2) + "." + (rut).slice(2,5) +'.'+ (rut).slice(5,8) +'-'+(rut).slice(8)
    }
    */
}

let soloEmail = () => {
    let correo = document.getElementById('correo').value
    let ban = 0
    for (let i = 0; i < correo.length; i++) {
        if(correo[i] == '@'){
            ban = ban+1
        }
        
    }
    if (ban === 1) {
        console.log('Correo Valido')
    }else{
        console.log('Correo Invalido')
    }
}

let soloNumeros = (event) => {
    let code = (event.which) ? event.which : event.keyCode;
    let edad = document.getElementById('edad').value
    


    if (code >= 32 && code <= 47) {
        event.preventDefault();
        return
    }
    else if(code >= 58  && code <= 254){
        event.preventDefault();
        return
    }

    

    

}


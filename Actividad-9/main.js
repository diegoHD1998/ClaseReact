/* class Persona{
    constructor(param1, param2){
        this.valor1 = param1
        this.valor2 = param2
    }

    suma(){
        let resultado = this.valor1 + this.valor2
        return resultado
    }
}

let obj = new Persona(2,2)

console.log(`El valor de la suma es: ${obj.suma()}`) */

let fecha = new Date()

console.log(`${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)

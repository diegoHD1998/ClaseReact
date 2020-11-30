let persona = {
    nombre:'Diego',
    apellido:'Muñoz',
    edad:22,
}

let Persona1 = JSON.stringify(persona)// JSON.stringify: Es para convertir un objeto a un string

console.log(Persona1)

let Persona2 = JSON.parse(Persona1)// JSON.parse: Es para convertir un string(json) a objeto

console.log(Persona2)


let persona = [
    {id:1, nombre:'Javiera'},
    {id:2, nombre:'Vicente'},
    {id:3, nombre:'Diego'}
];

let salario = [
    {id:1, salario:1000},
    {id:2, salario:2000}
    
];


let RecuperarPersona = (id, callback) => {

    let personaDB = persona.find( (persona) => persona.id === id)

    if (!personaDB) {
        callback(`No existe una persona con id:${id}`)
    } else {
        callback(null, personaDB)
    }
} 

let RecuperarSalario = (persona, callback) => {

    let salarioDB = salario.find( salario => salario.id === persona.id)

    if(!salarioDB){
        callback(`No existe un salario para ${persona.nombre}`)
    }else{
        callback(null, {nombre: persona.nombre, salario: salarioDB.salario})
    }

}

RecuperarPersona(3, (err, persona1) => {

    if(err){
        return console.log(err)
    }else{
        RecuperarSalario(persona1, (err, resp) => {
            if(err){
                return console.log(err)
            }else{
                console.log(`${resp.nombre} tiene un salario de ${resp.salario}`)
            }
        })
    }
})
 







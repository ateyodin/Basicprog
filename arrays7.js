var andres = {
  nombre: "Andres",
  apellido: "Ramirez",
  edad: 32,
  altura: 1.72,
  cantidadDeLibros: 45
}

var david = {
  nombre: "David",
  apellido: "Ramirez",
  edad: 27,
  altura: 1.87,
  cantidadDeLibros: 39
}

var ivan = {
  nombre: "Ivan",
  apellido: "Ramirez",
  edad: 23,
  altura: 1.53,
  cantidadDeLibros: 20
}

var ricardo = {
  nombre: "Ricardo",
  apellido: "Ramirez",
  edad: 54,
  altura: 1.62,
  cantidadDeLibros: 42
}

var personas = [andres, david, ivan, ricardo];


// Estamos creando un nuevo objeto que no modifica el objeto origial

const pasarACms = (persona) => ({
    ...persona,
    altura: persona.altura * 100 // persona.altura *= 100; es lo mismo
  })



var personasCms = personas.map(pasarACms) //map nos devuelve un nuevo array, estamos modificando la altura de metros a centimentros

/* var acum = 0;

for (var i = 0; i < personas.length; i++){
  acum = acum + personas[i].cantidadDeLibros
} */

const reducer = (acum, persona) => acum + persona.cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`Todos tienen ${totalDeLibros} libros`)

var andres = {
  nombre: "Andres",
  apellido: "Ramirez",
  edad: 32,
  altura: 1.72
}

var david = {
  nombre: "David",
  apellido: "Ramirez",
  edad: 27,
  altura: 1.87
}

var ivan = {
  nombre: "Ivan",
  apellido: "Ramirez",
  edad: 23,
  altura: 1.53
}

var ricardo = {
  nombre: "Ricardo",
  apellido: "Ramirez",
  edad: 54,
  altura: 1.62
}

const esBaja = persona => persona.altura < 1.8;

//const esAlta = ({ altura })=> altura > 1.8;

var personas = [andres, david, ivan, ricardo];

var personasBajas = personas.filter(esBaja)

console.log(personasBajas)

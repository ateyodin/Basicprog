var andres = {
  nombre: "Andres",
  apellido: "Ramirez",
  edad: 32,
}

var david = {
  nombre: "David",
  apellido: "Ramirez",
  edad: 27,
}

var ivan = {
  nombre: "Ivan",
  apellido: "Ramirez",
  edad: 23,
}

var ricardo = {
  nombre: "Ricardo",
  apellido: "Ramirez",
  edad: 54,
}

var personas = [andres, david, ivan, ricardo];

for (var i = 0; i < personas.length; i++)
{
  var persona = personas[i];
  console.log(`${persona.nombre} tiene  ${persona.edad} de edad`)
}

var andres =
{
  nombre: "Andres",
  apellido: "Ramirez",
  edad: 32,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  inversionista: true,
}

var juan =
{
  nombre: "Juan",
  edad: 15
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona)
{
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona)
{

  if(esMayorDeEdad(persona))
  {
    console.log(`${persona.nombre} Es Mayor de edad`)
  } else {
    console.log(`${persona.nombre} Es Menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(andres)
imprimirSiEsMayorDeEdad(juan)

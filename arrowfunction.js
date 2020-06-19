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


const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD; //arrow functions es lo mismo que escribir la funcion de abajo

/*function esMayorDeEdad(persona)
{
  return persona.edad >= MAYORIA_DE_EDAD;
}*/

function imprimirSiEsMayorDeEdad(persona)
{

  if(esMayorDeEdad(persona))
  {
    console.log(`${persona.nombre} Es Mayor de edad`)
  } else {
    console.log(`${persona.nombre} Es Menor de edad`)
  }
}

function permitirAcceso(persona){
  if (!esMayorDeEdad(persona)){
    console.log("Acceso Denegado!")
  }

}

imprimirSiEsMayorDeEdad(andres)
imprimirSiEsMayorDeEdad(juan)

//Estructuras Repetitivas

//Objeto
var andres = {
  nombre: "Andres",
  apellido: "Ramirez",
  peso: 84,
  edad:32
}



console.log(`Al inicio del 2020 ${andres.nombre} pesa ${andres.peso}kg`)

//Magic Number que utilizaremos en nuestra funcion
const INCREMENTO_PESO = 0.2

//funciones de nuestro codigo

function aumentarDePeso(persona)
{
  return persona.peso += INCREMENTO_PESO;
}

//const aumentarDePeso = persona => persona.peso += 2020

function disminuirDePeso(persona){
  return persona.peso -= INCREMENTO_PESO;
}

//const disminuirDePeso = persona => persona.peso -= 2020

//Ciclo for
for( var i = 1; i <= 365; i++)
{
  var random = Math.random()

  if (random < 0.25){
    //aumenta de peso
    aumentarDePeso(andres)
  } else if (random < 0.5) {
    //disminuye de peso
    disminuirDePeso(andres)
  }

}

console.log(`Al final del 2020 ${andres.nombre} pesa ${andres.peso.toFixed(1)}kg`)

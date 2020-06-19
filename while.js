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
const INCREMENTO_PESO = 0.3

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

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = andres.peso - 3;
var dias = 0;

//Ciclo while

while (andres.peso >= META)
{
  if (comeMucho()){
    //aumento de peso
    aumentarDePeso(andres);
  }
  if (realizaDeporte()){
    //adelgazar
    disminuirDePeso(andres);
  }
  dias += 1;

}



console.log(`Pasaron ${dias} dias hasta que ${andres.nombre} adelgazo 3kg y ahora pesa ${andres.peso.toFixed(1)}kg`)

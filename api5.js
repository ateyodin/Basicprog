const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'

//funcion $get jquery recibe varios paramentos, el primero es el url de donde sacaremos la info
//replace es un metodo que reemplaza un string por algo que queramos nosotros, en este caso vamos a reemplazar id por 1

//const bulbasaur = `${API_URL}${POKEMON_URL.replace(':id', 1)}`
//vamos a poner en comentario la constate bulbaser porque necesitamos una const mas grande para llamar varios personajes
//const bulbasaur es la concatenacion de API_URL Y POKEMON_URL y ademas el metodo replace

const opts = { crossDomain: true }
//const opt es la variable donde dejamos el crossdomain
//el segundo parametro es el crossDomain que es para indicar que el request es hacia otra pagina

//callback seria el tercer parametro  de la funcion $ de jquery, que tambin es una funcion que se va  ejecutar en algun futuro
//no sabemos cuando pero el $ get se encatga de llamarla, cuando termine el request la llama
// tiene como parametros data que es un objeto, un string indicando el status de la respuesta y el objeto del request de javascript


//esta funcion es para usar la constante de la url y ya no vamos a poner un numero fijo si no que llamaremos a diferentes
//personajes

function obtenerPokemon(id){

  return new Promise(function (resolve, reject){
    const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`

    $.
      get(url, opts, function(data){
        resolve(data)
      })

      .fail(function (){
        reject(id)
      })
  })



  //callback es la constante que creamos para utilizar en el tercer parametro de la funcion get de jquery
  //y tenemos que mover la funcion pesos de jquery para que este dentro de la funcion
  //cambiamos el parametro bulbasor por url para llamar a mas personajes

}

// para poder ponerle un orden a los elementos quevamos a llamar necesitamos ponerle otro parametro a nuestro funcion obtenerPokemon
//para asi darle el orden que queremos ese parametro es el callback

// entonces lo que hacemos acontinuacion es llamar a obtener pomkemon(1) y apenas se ejecuta llamamos a obtener pokemon2
//y asi salen en orden

function onError(id){
  console.log(`Error en ${id}`)
}

obtenerPokemon(1)
  .then(function(pokemon){
    console.log(`Hola, yo soy ${pokemon.name} jajaj `)
  })
  .catch(onError)


//vamos a poner el segundo parametro callback de la funcion obtenerPokemon cuando la llamoas

// el asincronismo es llamar muchos metodos y no saber en que orden van a llegar

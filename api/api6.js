const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = { crossDomain: true }


function obtenerPokemon(id){

  return new Promise(function (resolve, reject){
    const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
    $.
      get(url, opts, function(data){
        resolve(data)
      })
      .fail(() =>
        reject(id)
      )
  })
}

function onError(id){
  console.log(`Error en ${id}`)
}

obtenerPokemon(1)
  .then(pokemon => {
    console.log(`Hola, yo soy ${pokemon.name} jajaj `)
    return obtenerPokemon(2)
  })
  .then(pokemon => {
    console.log(`Hola, yo soy ${pokemon.name} jajaj `)
    return obtenerPokemon(3)
  })
  .then(pokemon => {
    console.log(`Hola, yo soy ${pokemon.name} jajaj `)
  })

  .catch(onError)

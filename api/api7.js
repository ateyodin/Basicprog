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

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//var promesas = ids.map(function(id){
//  return obtenerPokemon(id)
//})

var promesas = ids.map(id => obtenerPokemon(id))

Promise
  .all(promesas)
  .then(pokemon => console.log(pokemon))
  .catch(onError)

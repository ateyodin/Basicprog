const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'

//const bulbasaurURL =`${API_URL}${POKEMON_URL.replace(':id',1)}`
//const opts = { crossDomain: true }
//const onBulbasaurResponse = function (bulbasaur){
//  console.log(`Bulba bulba, ${bulbasaur.name}`)
//}
//$.get(bulbasaurURL, opts, onBulbasaurResponse)

$.get(`${API_URL}${POKEMON_URL.replace(':id',1)}`, { crossDomain: true }, function (bulbasaur){
  console.log(`Bulba bulba, ${bulbasaur.name}`)
})

var imagenes = [];

imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinaurio"] = "cerdo.png";




// var pokacho = new Pakiman(nombre, ataque, tipo, vida)
// var tocinaurio = new Pakiman(nombre, ataque, tipo, vida)

var coleccion = [];
var numeroPakimanes = 0;
var pakimanesRegistrados = 0;

numeroPakimanes = prompt("Cuantos Pakimanes vamos a registrar");

while( pakimanesRegistrados < numeroPakimanes)
{
  var nombre = prompt("Ingresa nombre de tu Pakiman");
  var ataque = prompt("Ingresa ataque de tu Pakiman");
  var tipo = prompt("Ingresa tipo de tu Pakiman");
  var vida = prompt("Ingresa vida de tu Pakiman");

  var pakimanNuevo = new Pakiman(nombre, ataque, tipo, vida);

  coleccion.push(pakimanNuevo);

  pakimanesRegistrados++
}

for(var capturados of coleccion)
{
  capturados.mostrar();
}

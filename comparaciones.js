var x = 4;
var y = '4';

x == y //true porque 4 en numero es igual 4 en string - los vuelve string y los compara

x === y //false porque un numero no es igual a un string - es buena practica usar ===

var andres =
{
  nombre: "Andres"
}

var otraPersona =
{
  nombre: "Andres"
}

andres == otraPersona //false

andres === otraPersona //false

//

var andres =
{
  nombre: "Andres"
}

var otraPersona = andres

andres == otraPersona //true

andres === otraPersona //true

//

var andres =
{
  nombre: "Andres"
}

var otraPersona =
{
  ...andres //estamos desglosando el primer objeto y copiando sus atributos en el nuevo objeto
}

andres == otraPersona //false

andres === otraPersona //flase

//

var andres =
{
  nombre: "Andres"
}

var otraPersona = andres

otraPersona.nombre = "Pepe"

andres //tambien cambia su nombre a pepe por ser los objetos los mismos en meroria ram

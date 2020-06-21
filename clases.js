function persona(nombre, edad, altura){
  this.nombre = nombre,
  this.edad = edad,
  this.altura = altura
}

persona.prototype.saludar = function (){
  console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
}

persona.prototype.soyAlto = function(){
  if(this.altura >= 1.80){
    console.log(`Y soy alto`)
  } else {
    console.log(`No soy tan alto`)
  }
}

var andres = new persona("Andres", 32, 1.75)
var viviana = new persona("Viviana", 29, 1.56)
var arturo = new persona("Arturo", 31, 1.80)

andres.saludar()
andres.soyAlto()
viviana.saludar()
viviana.soyAlto()
arturo.saludar()
arturo.soyAlto()

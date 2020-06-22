class Persona{
  constructor(nombre, edad, altura){
    this.nombre = nombre,
    this.edad = edad,
    this.altura = altura
  }

  saludar(){
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
  }

  soyAlto(){
    return this.altura >= 1.80
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, altura){
    super(nombre, edad, altura)
//    this.nombre = nombre
//    this.edad = edad
//    this.altura = altura
  }

  saludar(){
    console.log(`Hola me llamo ${this.nombre} y soy desarrollador/a`)
  }
}





var andres = new Persona("Andres", 32, 1.75)
var viviana = new Persona("Viviana", 29, 1.56)
var arturo = new Persona("Arturo", 31, 1.80)

var andres = new Desarrollador("Andres", 32, 1.75)
var viviana = new Desarrollador("Viviana", 29, 1.56)
var arturo = new Desarrollador("Arturo", 31, 1.80)

andres.saludar()
andres.soyAlto()
viviana.saludar()
viviana.soyAlto()
arturo.saludar()
arturo.soyAlto()

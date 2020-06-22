//3 maneras de definir funciones en Javascript

//Declaración

function suma(a,b){
  var sumatoria = a + b;
  return sumatoria;
}

//Constructor

var hablar = new Function (
  'edad',
  "alert('Yo tengo ' + edad + ' años de edad');"
);

//Expresión

var suma = function(a, b){
  var sumatoria = a + b;
  return sumatoria
}

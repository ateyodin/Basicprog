//Declarativas (//declarativas)

function miFuncion() //como (//como) estamos usando una palabra reservada se declara automáticamente una función

{

return 3;

} // una función que inicializa un valor en la memoria y lo guarda

miFuncion( );

//Expresión

var miFunción  = function(a,b)// una función también necesita parámetros y al momento que nosotros llamamos la función escribimos esos parámetros que nuestra función espera

{
var c = a + b;

return c; //que](//que) no retorne el resultado para poder llamarlo afuera de la función

}

miFunción( );

//Funcion que pasa en el nombre a mayusculas

var nombre = "Andres";

function imprimirEnMayusculas()
{
    nombre = nombre.toUpperCase()
    return nombre
}

imprimirEnMayusculas();

// Funcion que pasa el nombre a mayuscula pero no modifica la variable global

var nombre = "Andres";

function imprimirEnMayusculas(n)
{
    n = n.toUpperCase()
    return n
}

imprimirEnMayusculas(nombre);

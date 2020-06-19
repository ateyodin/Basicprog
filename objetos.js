var nombreAndres = "Andres";
var nombreDario = "Dario";

function imprimirEnMayusculas(n)
{
    n = n.toUpperCase();
    console.log(n);
}

imprimirEnMayusculas(nombreAndres);
imprimirEnMayusculas(nombreDario);

// Objetos

var andres =
{
    nombre : "Andres",
    apellido : "Ramirez",
    edad : 32,
}

var david =
{
    nombre : "David",
    apellido : "Ramirez",
    edad : 27,
}

function imprimirEnMayusculas(n)
{
    n = n.toUpperCase();
    console.log(n);
}


imprimirEnMayusculas(andres.nombre);
imprimirEnMayusculas(david.nombre);

// objetos 2

var andres =
{
    nombre : "Andres",
    apellido : "Ramirez",
    edad : 32,
}

var david =
{
    nombre : "David",
    apellido : "Ramirez",
    edad : 27,
}

function imprimirEnMayusculas(persona)
{
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}


imprimirEnMayusculas(andres);
imprimirEnMayusculas(david);

// objetos 3

var andres =
{
    nombre : "Andres",
    apellido : "Ramirez",
    edad : 32,
}

var david =
{
    nombre : "David",
    apellido : "Ramirez",
    edad : 27,
}

function imprimirEnMayusculas(persona)
{
    console.log(persona.nombre.toUpperCase());
}


imprimirEnMayusculas(andres);
imprimirEnMayusculas(david);

// objetos 4

var andres =
{
    nombre : "Andres",
    apellido : "Ramirez",
    edad : 32,
}

var david =
{
    nombre : "David",
    apellido : "Ramirez",
    edad : 27,
}

function imprimirEnMayusculas({nombre})
{
    console.log(nombre.toUpperCase());
}


imprimirEnMayusculas(andres);
imprimirEnMayusculas(david);
imprimirEnMayusculas({nombre:"pepito"});

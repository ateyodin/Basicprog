//objetos 5

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
    var {nombre} = persona;  // var nombre = persona.nombre
    console.log(nombre.toUpperCase());
}


imprimirEnMayusculas(andres);
imprimirEnMayusculas(david);
imprimirEnMayusculas({nombre:"pepito"});

//objetos 6

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

function imprimirNombreYEdad(persona)
{
    var {nombre} = persona;  // var nombre = persona.nombre
    var {edad} = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad}`);
}


imprimirNombreYEdad(andres);
imprimirNombreYEdad(david);
imprimirNombreYEdad({nombre:"pepito", edad: 28});

// objetos 7

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

function cumpleanos(persona)
{
    persona.edad += 1
    console.log(persona.edad)
}

cumpleanos(andres)

//objetos 8

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

function cumpleanos(persona)
{
    let nuevoObjeto =
    {
        ...persona,
        edad: persona.edad + 1
    }
    console.log(nuevoObjeto)
}

cumpleanos(andres)

// De esta manera la funcion modifica los objetos al pasarlos por paramentros creando un objeto nuevo sin alterar el original

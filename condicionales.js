//Estructuras de carousel-control



  var andres =
  {
    nombre: "Andres",
    apellido: "Ramirez",
    edad: 32,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    inversionista: true,
  }

  function imprimirProfesiones(persona)
  {
    console.log(`${persona.nombre}:`)

    if(persona.ingeniero === true)
    {
      console.log("Es Ingeniero")
    } else {
      console.log("No es Ingeniero")
    }
    if(persona.cocinero === true)
    {
      console.log("Es Cocinero")
    } else {
      console.log("No es Cocinero")
    }
    if(persona.cocinero === true)
    {
      console.log("Es Cantante")
    } else {
      console.log("No es Cantante")
    }
    if(persona.cocinero === true)
    {
      console.log("Es Dj")
    } else {
      console.log("No es Dj")
    }
    if(persona.cocinero === true)
    {
      console.log("Es Guitarrista")
    } else {
      console.log("No es Guitarrista")
    }
    if(persona.inversionista === true)
    {
      console.log("Es Inversionista")
    } else {
      console.log("Inversionista")
    }
  }

  function imprimirSiEsMayorDeEdad(persona)
  {
    console.log(`${persona.nombre}:`)
    if(persona.edad >= 18)
    {
      console.log("Es Mayor de edad")
    } else {
      console.log("Es Menor de edad")
    }

  }

imprimirProfesiones(andres)
imprimirSiEsMayorDeEdad(andres)

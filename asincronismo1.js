console.log ('a')
console.log ('b')
console.log ('c')
//La salida de los console.log anteriores se muestra de la siguiente manera
/*
a
b
c
*/

//La función setTimeout recibe dos valores: Una función y el tiempo de delay, por ejemplo
//en el ejemplo anterior vamos a modificar el segundo console.log añadiendo el setTimeout
console.log('a')
setTimeout(() => console.log('b'), 2000)
console.log('c')
//El orden de los console.log cambia debido al setTimeout,
//básicamente lo que sucede es que Javascript primero ejecuta todo el código de una funci´n
//y después ejecuta todo el código que fue puesto en la pila de ejecución:
/*
a
c
b (este console.log tardará dos segundos en imprimirse)
*/

//En este ejemplo vemos la forma en la que funciona la pila de JS.
//Ejecutamos un for y, cuando termine, JS ejecutará el console.log que tiene asignado el setTimeout
setTimeout(() => console.log('d'), 2000)
for (var i = 0; i < 1000000000; i++){

}
//En este ejemplo, Javascript ya tiene listo el setTimeout para imprimir la letra
//d pero sigue ejecutando el programa principal, cuando termina de ejecutar el código
//es cuando imprime la letra d. Los dos segundos son el mínimo de ejecución
//porque todo depende del tiempo de ejecución del programa principal

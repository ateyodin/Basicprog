const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor(){
    this.inicializar()
    this.generarSecuencia()
  }
  inicializar(){
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }
  generarSecuencia(){
    //Una forma de generar Arrays de numeros aleatorios entre 0 y 3
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() *4))
  }
}

function empezarJuego(){
  window.juego = new Juego()
}

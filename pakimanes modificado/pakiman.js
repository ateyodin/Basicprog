class Pakiman //creación de clases para guardar objetos
{
  constructor(nombre, ataque, tipo, vida)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.ataque = ataque;
    this.tipo = tipo;
    this.vida = vida;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "<strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Tipo: " + this.tipo + "<br />");
    document.write("Ataque: " + this.ataque + "<br />");
    document.write("</p>");
  }
}

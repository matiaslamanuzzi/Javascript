const condicion = true
if (condicion) alert("Bienvenido Al hotel Chocolat");

function obtenerDatos(){
  const dato = prompt("Nombre y Apellido");

  console.log(dato);
}

const cantidadNombres = Number(
  prompt ("ingrese la cantidad de usuarios")
)
if (!isNaN(cantidadNombres)) {
  for (let i = 0; i < cantidadNombres; i++) {
    obtenerDatos();
  }
}





const productos = []

class Producto {
  constructor( nombre, precio ){
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.id = Math.random(). toString(10).slice(2)
  }

  cambioDolar(){
    this.precio = this.precio * 1050;
  }
}

productos.push(new Producto("habitacion normal", 25))
productos.push(new Producto("habitacion premium", 40))
productos.push(new Producto("habitacion exclusiva", 75))
productos.push(new Producto("Plan Finlandia", 160))
productos.push(new Producto("Plan Plus Week", 600))

for (const producto of productos) {
  producto.cambioDolar()
}

console.log (productos)


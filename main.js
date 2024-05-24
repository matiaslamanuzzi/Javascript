

const app = document.getElementById("planes")

const planes = [
    {nombre: "habitacion" , tipo: "normal" , precio: "$USD 25" },
    {nombre: "habitacion" , tipo: "premium" , precio: "$USD 40" },
    {nombre: "habitacion" , tipo: "exclusiva" , precio: "$USD 75" },
    {nombre: "habitacion" , tipo: "plan finlandia" , precio: "$USD 160" },
    {nombre: "habitacion" , tipo: "plan plus week" , precio: "$USD 600" },
];

for (const plan of planes) {
    const card = document.createElement("div")
    card.className = "card";
    card.innerHTML =  `
    <h3>${plan.nombre}</h3>
    <p>${plan.tipo}</p>
    <p>${plan.precio}</p>
    `;
}
app.appendChild(card);

document.getElementById('formulario').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var terminos = document.getElementById('terminos').checked;

    if (!nombre) {
        alert('Por favor, ingrese su nombre.');
        event.preventDefault();
    } else if (!sexo) {
        alert('Por favor, seleccione su sexo.');
        event.preventDefault();
    } else if (!terminos) {
        alert('Debe aceptar los Términos y Condiciones.');
        event.preventDefault();
    }
});
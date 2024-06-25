// Array de habitaciones
const habitaciones = [
    {
        imagen: 'habitacion1.jpg',
        titulo: 'Habitación Deluxe',
        descripcion: 'Descripción de la habitación deluxe.'
    },
    {
        imagen: 'habitacion2.jpg',
        titulo: 'Suite Presidencial',
        descripcion: 'Descripción de la suite presidencial.'
    },
    {
        imagen: 'habitacion3.jpg',
        titulo: 'Habitación Estándar',
        descripcion: 'Descripción de la habitación estándar.'
    }
];

// Función para generar habitaciones en el DOM
function generarHabitaciones() {
    const contenedor = document.getElementById('habitacionesContainer');
    habitaciones.forEach(habitacion => {
        const divHabitacion = document.createElement('div');
        divHabitacion.className = 'habitacion';
        
        const img = document.createElement('img');
        img.src = habitacion.imagen;
        img.alt = habitacion.titulo;
        
        const h3 = document.createElement('h3');
        h3.textContent = habitacion.titulo;
        
        const p = document.createElement('p');
        p.textContent = habitacion.descripcion;
        
        divHabitacion.appendChild(img);
        divHabitacion.appendChild(h3);
        divHabitacion.appendChild(p);
        
        contenedor.appendChild(divHabitacion);
    });
}

// Llamar a la función para generar habitaciones al cargar la página
window.onload = generarHabitaciones;

function mostrarAlerta() {
    alert("Gracias por su interés! Por favor, contáctenos para más detalles.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Su mensaje ha sido enviado. Nos pondremos en contacto con usted pronto.");
});

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Loading"
  });

  
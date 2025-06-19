// contacto.js - Guarda mensajes en localStorage y los muestra en la lista

const formContacto = document.getElementById('formContacto');
const listaMensajes = document.getElementById('listaMensajes');

// Función para cargar y mostrar mensajes guardados
function cargarMensajes() {
    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    listaMensajes.innerHTML = '';

    if (mensajes.length === 0) {
        listaMensajes.innerHTML = '<li>No hay mensajes aún.</li>';
        return;
    }

    mensajes.forEach(({ nombre, email, mensaje }) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${nombre}</strong> (<a href="mailto:${email}">${email}</a>): <br> ${mensaje}`;
        listaMensajes.appendChild(li);
    });
}

// Evento submit para guardar nuevo mensaje
formContacto.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = formContacto.nombre.value.trim();
    const email = formContacto.email.value.trim();
    const mensaje = formContacto.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, llena todos los campos.');
        return;
    }

    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    mensajes.push({ nombre, email, mensaje });
    localStorage.setItem('mensajes', JSON.stringify(mensajes));

    cargarMensajes();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    formContacto.reset();
});

// Cargar mensajes al iniciar la página
cargarMensajes();


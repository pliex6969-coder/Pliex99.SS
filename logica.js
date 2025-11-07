// 1. Definir las preguntas del juego (situación y su clasificación correcta)
const preguntas = [
    { texto: "La empresa tiene una patente tecnológica única.", respuesta: "F" }, // Fortaleza
    { texto: "Un nuevo competidor grande acaba de entrar al mercado.", respuesta: "A" }, // Amenaza
    { texto: "El mercado objetivo está creciendo rápidamente.", respuesta: "O" }, // Oportunidad
    { texto: "El personal carece de capacitación en nuevas herramientas.", respuesta: "D" } // Debilidad
    // Puedes añadir más preguntas aquí...
];

let indiceActual = 0;

// Función que se ejecuta al hacer clic en un botón
function comprobarRespuesta(eleccion) {
    const preguntaActual = preguntas[indiceActual];
    const retroalimentacion = document.getElementById('retroalimentacion');
    const siguienteBtn = document.getElementById('siguiente-btn');
    const opciones = document.getElementById('opciones-botones').querySelectorAll('button');

    // Deshabilitar botones para evitar múltiples clics
    opciones.forEach(btn => btn.disabled = true);

    if (eleccion === preguntaActual.respuesta) {
        retroalimentacion.textContent = "¡Correcto! Es una " + getNombreFODA(eleccion) + ".";
        retroalimentacion.style.color = "green";
    } else {
        retroalimentacion.textContent = "Incorrecto. Intenta de nuevo o presiona Siguiente.";
        retroalimentacion.style.color = "red";
    }

    siguienteBtn.style.display = 'block';
    siguienteBtn.onclick = cargarSiguiente; // Asignar la función al botón Siguiente
}

// Función para obtener el nombre completo de la categoría
function getNombreFODA(sigla) {
    switch (sigla) {
        case 'F': return 'Fortaleza';
        case 'O': return 'Oportunidad';
        case 'D': return 'Debilidad';
        case 'A': return 'Amenaza';
        default: return '';
    }
}

// Función para cargar la siguiente pregunta
function cargarSiguiente() {
    indiceActual++;

    if (indiceActual < preguntas.length) {
        const preguntaTexto = document.getElementById('pregunta-texto');
        const retroalimentacion = document.getElementById('retroalimentacion');
        const siguienteBtn = document.getElementById('siguiente-btn');
        const opciones = document.getElementById('opciones-botones').querySelectorAll('button');

        // Resetear la vista
        preguntaTexto.textContent = preguntas[indiceActual].texto + "¿Qué tipo de factor es?";
        retroalimentacion.textContent = "";
        siguienteBtn.style.display = 'none';
        opciones.forEach(btn => btn.disabled = false); // Habilitar botones

    } else {
        // Fin del juego
        document.getElementById('juego-contenedor').innerHTML = "<h2>¡Juego Terminado! Gracias por participar.</h2>";
    }
}

// La primera pregunta se carga automáticamente al inicio.
// Si quieres que empiece al cargar la página, puedes llamar a cargarSiguiente aquí o ajustar la inicialización.

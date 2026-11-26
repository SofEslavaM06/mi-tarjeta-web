// Función para girar la tarjeta
function girarTarjeta() {
    const tarjeta = document.getElementById("tarjeta");
    tarjeta.classList.toggle("girada");
}

// Función para iniciar el juego
function iniciarJuego() {
    const juego = document.getElementById("juego");

    juego.innerHTML = `
        <h2>¡Vamos a jugar!</h2>
        <p>Adivina el número del 1 al 5.</p>
        <input type="number" id="respuesta" min="1" max="5">
        <button onclick="comprobarRespuesta()">Comprobar</button>
        <p id="resultado"></p>
    `;
}

// Función para comprobar la respuesta
function comprobarRespuesta() {
    const numero = Math.floor(Math.random() * 5) + 1;
    const respuesta = Number(document.getElementById("respuesta").value);
    const resultado = document.getElementById("resultado");

    if (respuesta < 1 || respuesta > 5 || !Number.isInteger(respuesta)) {
        resultado.textContent = "Escribe un número del 1 al 5.";
    } else if (respuesta === numero) {
        resultado.textContent = "¡Felicidades! ¡Adivinaste!";
    } else {
        resultado.textContent = "No acertaste. El número era " + numero;
    }
}
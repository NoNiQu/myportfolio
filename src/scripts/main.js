import "../style/main.scss";
import Typewriter from "typewriter-effect/dist/core";

// Asegurarse de que el DOM esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const appElement = document.getElementById("app");

  // Asegúrate de que el botón existe antes de agregar el evento
  if (startButton) {
    startButton.addEventListener("click", () => {
      // Comienza la escritura del texto
      console.log("Iniciando la escritura del texto.");

      // Inicializamos TypewriterJS
      const typewriter = new Typewriter(appElement, {
        loop: false, // No volverá a escribir el texto una vez que termine
        delay: 100, // Retraso entre cada letra
      });

      // Configuración del texto con pausa de 2 segundos
      typewriter
        .typeString("hola soy marcos alarcon") // El texto a escribir
        .pauseFor(2000) // Pausa de 2 segundos después de escribir el texto
        .start(); // Comienza la animación
    });
  } else {
    console.error("El botón 'startButton' no se encontró en el DOM.");
  }
});

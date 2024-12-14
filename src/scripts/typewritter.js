import Typewriter from 'typewriter-effect/dist/core';

export function initTypewriter(language, translations) {
  const lang = translations[language];

  // Actualizar el texto del "Programmer"
  const programmerElement = document.getElementById("programmerText");
  if (programmerElement) {
    programmerElement.innerHTML = "";
    new Typewriter(programmerElement, {
      loop: false,
      delay: 75,
    })
      .typeString(lang.programmerText)
      .start();
  }

  // Actualizar el texto del "Designer"
  const designerElement = document.getElementById("designerText");
  if (designerElement) {
    designerElement.innerHTML = "";
    new Typewriter(designerElement, {
      loop: false,
      delay: 75,
    })
      .typeString(lang.designerText)
      .start();
  }
}


    
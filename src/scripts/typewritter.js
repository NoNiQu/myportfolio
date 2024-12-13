//typewriter

document.querySelectorAll("main h1").forEach((h1) => {
    const originalText = h1.innerText;
    h1.innerText = "";
    const typewriter = new Typewriter(h1, {
      loop: false,
      delay: 75,
    });
    typewriter.typeString(originalText).start();
  });
  
  // Modificar la función changeLanguage para reiniciar el efecto
  function changeLanguage(language) {
    const lang = translations[language];
  
    // Cambiar los textos del contenido de la página
    document.getElementById("pageTitle").innerText = lang.pageTitle;
    document.getElementById("aboutMe").innerText = lang.aboutMe;
    document.getElementById("skills").innerText = lang.skills;
    document.getElementById("projects").innerText = lang.projects;
    document.getElementById("socials").innerText = lang.socials;
    document.getElementById("programmerText").innerText = lang.programmerText;
    document.getElementById("designerText").innerText = lang.designerText;
  
    // Reiniciar el efecto de máquina de escribir para los h1
    document.querySelectorAll("main h1").forEach((h1) => {
      const originalText = h1.innerText;
      h1.innerText = "";
      const typewriter = new Typewriter(h1, {
        loop: false,
        delay: 75,
      });
      typewriter.typeString(originalText).start();
    });
  
    // Cambiar los botones de idioma
    document.getElementById("es").classList.remove("active");
    document.getElementById("en").classList.remove("active");
    document.getElementById(language).classList.add("active");
  
    // Mostrar solo el botón correspondiente
    if (language === "es") {
      document.getElementById("en").style.display = "inline-block"; // Muestra "EN" cuando se selecciona Español
      document.getElementById("es").style.display = "none"; // Oculta "ES"
    } else {
        document.getElementById("en").style.display = "none"; // Oculta "EN" cuando se selecciona Inglés
        document.getElementById("es").style.display = "inline-block"; // Muestra "ES"
      }
    }
    
    document.getElementById("es").addEventListener("click", () => changeLanguage("es"));
    document.getElementById("en").addEventListener("click", () => changeLanguage("en"));
    
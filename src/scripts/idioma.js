// idioma.js

// Definir las traducciones
const translations = {
    es: {
      pageTitle: "Marcos Alarcon Portfolio",
      aboutMe: "Sobre mí",
      skills: "Habilidades",
      projects: "Mis proyectos",
      socials: "Redes sociales",
      programmerText: "Programador",
      designerText: "Diseñador",
    },
    en: {
      pageTitle: "Marcos Alarcon Portfolio",
      aboutMe: "About me",
      skills: "Skills",
      projects: "My projects",
      socials: "Socials",
      programmerText: "Programmer",
      designerText: "Designer",
    },
  };
  
  // Función para cambiar el idioma de la página
  export function changeLanguage(language) {
    const lang = translations[language];
  
    // Cambiar los textos del contenido de la página
    document.getElementById("pageTitle").innerText = lang.pageTitle;
    document.getElementById("aboutMe").innerText = lang.aboutMe;
    document.getElementById("skills").innerText = lang.skills;
    document.getElementById("projects").innerText = lang.projects;
    document.getElementById("socials").innerText = lang.socials;
    document.getElementById("programmerText").innerText = lang.programmerText;
    document.getElementById("designerText").innerText = lang.designerText;
  
    // Cambiar los botones de idioma
    document.getElementById("es").classList.remove("active");
    document.getElementById("en").classList.remove("active");
    document.getElementById(language).classList.add("active");
  
    // Mostrar solo el botón correspondiente
    if (language === "es") {
      document.getElementById("en").style.display = "inline-block";  // Muestra "EN" cuando se selecciona Español
      document.getElementById("es").style.display = "none";  // Oculta "ES"
    } else {
      document.getElementById("en").style.display = "none";  // Oculta "EN" cuando se selecciona Inglés
      document.getElementById("es").style.display = "inline-block";  // Muestra "ES"
    }
  }
  
  // Llamar al cambiar de idioma
  document.getElementById("es").addEventListener("click", () => changeLanguage("es"));
  document.getElementById("en").addEventListener("click", () => changeLanguage("en"));
  
  // Cargar la página en español por defecto
  changeLanguage("es");
  
  
const translations = {
  es: {
    pageTitle: "Marcos Alarcon Portfolio",
    aboutMe: "Sobre mí",
    skills: "Habilidades",
    projects: "Mis proyectos",
    socials: "Redes sociales",
    programmerText: "Programador",
    designerText: "Diseñador",
    sobre: "sobre mí",
    hab: "habilidades",
    proy: "mis proyectos",
    soc: "redes sociales",
    title: "Hola soy Marcos",
    subtitle: "Un apasionado del desarrollo frontend y el diseño gráfico toledano",
    card1: "Tras estudiar Desarrollo Web en el IES Azarquiel y Diseño Gráfico en la Escuela de Artes de Toledo, he adquirido un enfoque multidisciplinar que me permite combinar la funcionalidad con la creatividad en cada proyecto.",
    card2: "Me apasiona crear soluciones digitales que no solo sean intuitivas, sino también visualmente atractivas. Mi objetivo es construir experiencias de usuario excepcionales y diseños que cuenten historias. Disfruto de trabajar tanto en la parte técnica del desarrollo web como en el aspecto visual del diseño, buscando siempre un equilibrio perfecto entre ambos.",
    card3: "A lo largo de mi formación, he trabajado en diversos proyectos donde he mejorado mis habilidades en HTML, CSS, JavaScript y React así como en el uso de herramientas como Photoshop, Illustrator, InDesign y Figma. Mi enfoque es siempre práctico, buscando soluciones eficientes y personalizadas para cada trabajo.",
    follow: "Sígueme en redes sociales y compartamos experiencias",
    buttonup: "subir",
    programming: "Programación:",
    design: "Diseño:",
    projTitle: "Estos son mis proyectos actuales, todos desplegados en GitHub Pages",
    proj1Title: "Inicio de juego de navegador",
    proj1Text: "Una pequeña prueba de cómo haría un juego de navegador",
    proj2Title: "Proyecto Pokedex con PokeAPI",
    proj2Text: "Proyecto conjunto en la creación de una Pokedex",
  },
  en: {
    pageTitle: "Marcos Alarcon Portfolio",
    aboutMe: "About me",
    skills: "Skills",
    projects: "My projects",
    socials: "Socials",
    programmerText: "Programmer",
    designerText: "Designer",
    sobre: "about me",
    hab: "skills",
    proy: "my projects",
    soc: "socials",
    title: "Hello, I'm Marcos",
    subtitle: "A passionate frontend developer and graphic designer from Toledo",
    card1: "After studying Web Development at IES Azarquiel and Graphic Design at the School of Arts in Toledo, I have acquired a multidisciplinary approach that allows me to combine functionality with creativity in every project.",
    card2: "I'm passionate about creating digital solutions that are not only intuitive but also visually appealing. My goal is to build exceptional user experiences and designs that tell stories. I enjoy working on both the technical side of web development and the visual aspect of design, always seeking a perfect balance between both.",
    card3: "Throughout my training, I have worked on several projects where I have improved my skills in HTML, CSS, JavaScript, and React as well as using tools like Photoshop, Illustrator, InDesign, and Figma. My approach is always practical, looking for efficient and customized solutions for each task.",
    follow: "Follow me on social media and let's share experiences",
    buttonup: "up",
    programming: "Programming:",
    design: "Design:",
    projTitle: "These are my current projects, all deployed on GitHub Pages",
    proj1Title: "Browser Game Start",
    proj1Text: "A small test of how I would make a browser game",
    proj2Title: "Pokedex Project with PokeAPI",
    proj2Text: "Collaborative project creating a Pokedex",
  },
};

export function changeLanguage(language) {
  const lang = translations[language];

  document.getElementById("pageTitle").innerText = lang.pageTitle;
  document.getElementById("aboutMe").innerText = lang.aboutMe;
  document.getElementById("skills").innerText = lang.skills;
  document.getElementById("projects").innerText = lang.projects;
  document.getElementById("socials").innerText = lang.socials;
  document.getElementById("programmerText").innerText = lang.programmerText;
  document.getElementById("designerText").innerText = lang.designerText;
  document.getElementById("title").innerText = lang.title;
  document.getElementById("subtitle").innerText = lang.subtitle;
  document.getElementById("card1").innerText = lang.card1;
  document.getElementById("card2").innerText = lang.card2;
  document.getElementById("card3").innerText = lang.card3;
  document.getElementById("follow").innerText = lang.follow;

  document.getElementById("sobre").innerText = lang.sobre;
  document.getElementById("hab").innerText = lang.hab;
  document.getElementById("proy").innerText = lang.proy;
  document.getElementById("soc").innerText = lang.soc;

  document.querySelectorAll(".buttonup").forEach((button) => {
    button.innerText = lang.buttonup;
  });

  document.querySelector("#skill .centrado h1").innerText = lang.programming;
  document.querySelectorAll("#skill .centrado")[1].querySelector("h1").innerText = lang.design;

  document.getElementById("titulo").innerText = lang.projTitle;
  document.getElementById("nombreproyecto1").innerText = lang.proj1Title;
  document.getElementById("descripcion1").innerText = lang.proj1Text;
  document.getElementById("nombreproyecto2").innerText = lang.proj2Title;
  document.getElementById("descripcion2").innerText = lang.proj2Text;

  document.getElementById("es").classList.remove("active");
  document.getElementById("en").classList.remove("active");
  document.getElementById(language).classList.add("active");

  document.getElementById("es").style.display = language === "en" ? "inline-block" : "none";
  document.getElementById("en").style.display = language === "es" ? "inline-block" : "none";
}

document.getElementById("es").addEventListener("click", () => changeLanguage("es"));
document.getElementById("en").addEventListener("click", () => changeLanguage("en"));

changeLanguage("es");

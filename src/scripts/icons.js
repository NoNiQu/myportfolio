// Seleccionamos los divs donde se añadirán los íconos
const progDiv = document.querySelector("#prog");
const desDiv = document.querySelector("#des");

// Definimos las carpetas de los íconos
const iconsDes = ["ai.svg", "figma.svg", "id.svg", "pr.svg", "ps.svg"];
const iconsProg = ["css3.svg", "html5.svg", "java.svg", "js2.svg", "node.svg", "react.svg", "sass.svg", "bootstrap.svg"];

// Guardar las posiciones de los íconos para evitar solapamientos
let positionsProg = [];
let positionsDes = [];

// Tamaño fijo para los íconos
const iconSize = 69; // Tamaño máximo de 40px

// Tamaño del enlace (asumido como un rectángulo)
const linkSize = 100; // Aquí ajustamos el tamaño estimado del enlace
const centerMargin = 200; // Aumentamos el margen adicional alrededor del centro

// Función para obtener una posición aleatoria limitada en altura y evitar solapamientos con el centro
function getRandomPosition(container, positions) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  let x, y;
  let overlapping = true;
  const margin = 50; // Margen de 50px para evitar solapamientos
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  while (overlapping) {
    // Generar una posición aleatoria dentro de los límites del contenedor
    x = Math.random() * (containerWidth - iconSize - margin); // Evita que se desborde y respete el margen
    y = Math.random() * (containerHeight - iconSize - margin);

    // Verificar si la posición se solapa con otras
    overlapping = positions.some(pos => {
      const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      return distance < iconSize + margin; // Compara la distancia y la evita si es menor que el tamaño más el margen
    });

    // Verificar que el ícono no esté demasiado cerca del centro (donde está el enlace)
    const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    if (distanceFromCenter < linkSize + centerMargin) {
      overlapping = true; // Si está cerca del centro, volvemos a calcular
    }
  }

  // Guardar la posición del ícono
  positions.push({ x, y });

  return { x, y };
}

// Función para agregar íconos aleatorios a un contenedor
export function addIcons(container, iconsFolder, iconsArray, positions) {
  iconsArray.forEach(icon => {
    // Crear elemento img
    const img = document.createElement("img");
    img.src = `assets/${iconsFolder}/${icon}`;

    // Asignar tamaño fijo
    img.style.width = `${iconSize}px`;
    img.style.height = `${iconSize}px`;

    // Asignar posición aleatoria, sin solaparse
    const { x, y } = getRandomPosition(container, positions);
    img.style.position = "absolute";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    // Agregar ícono al contenedor adecuado
    const iconsContainer = container.querySelector(`#icons${iconsFolder === "icons prog" ? "prog" : "des"}`);
    iconsContainer.appendChild(img);
  });
}

// Establecer posición relativa en los contenedores
progDiv.style.position = "relative";
desDiv.style.position = "relative";

// Añadir íconos a los divs
addIcons(progDiv, "icons prog", iconsProg, positionsProg);
addIcons(desDiv, "icons des", iconsDes, positionsDes);



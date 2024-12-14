const progDiv = document.querySelector("#prog");
const desDiv = document.querySelector("#des");

const iconsDes = ["ai.svg", "figma.svg", "id.svg", "pr.svg", "ps.svg"];
const iconsProg = [
  "css3.svg",
  "html5.svg",
  "java.svg",
  "js2.svg",
  "node.svg",
  "react.svg",
  "sass.svg",
  "bootstrap.svg",
];

let positionsProg = [];
let positionsDes = [];

const iconSize = 50;

const linkSize = 100;
const centerMargin = 200;

function getRandomPosition(container, positions) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  let x, y;
  let overlapping = true;
  const maxAttempts = 100;
  let attempts = 0;

  const margin = 50;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  while (overlapping && attempts < maxAttempts) {
    attempts++;

    x = Math.random() * (containerWidth - iconSize - margin);
    y = Math.random() * (containerHeight - iconSize - margin);

    overlapping = positions.some((pos) => {
      const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      return distance < iconSize + margin;
    });

    const distanceFromCenter = Math.sqrt(
      (x - centerX) ** 2 + (y - centerY) ** 2
    );
    if (distanceFromCenter < linkSize + centerMargin) {
      overlapping = true;
    }
  }

  if (attempts >= maxAttempts) {
    console.warn("No se encontró una posición válida, usando posición por defecto.");
    x = containerWidth / 2 - iconSize / 2;
    y = containerHeight / 2 - iconSize / 2;
  }

  positions.push({ x, y });
  return { x, y };
}

function addIcons(container, iconsFolder, iconsArray, positions) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  if (containerWidth < iconSize * 2 || containerHeight < iconSize * 2) {
    console.warn("El contenedor es demasiado pequeño para añadir íconos.");
    return;
  }

  const iconsContainer = container.querySelector(
    `#icons${iconsFolder === "icons prog" ? "prog" : "des"}`
  );

  const maxIcons = Math.min(
    iconsArray.length,
    Math.floor(containerWidth / (iconSize + 20))
  );

  iconsArray.slice(0, maxIcons).forEach((icon) => {
    const img = document.createElement("img");
    img.src = `assets/${iconsFolder}/${icon}`;

    img.style.width = `${iconSize}px`;
    img.style.height = `${iconSize}px`;

    const { x, y } = getRandomPosition(container, positions);
    img.style.position = "absolute";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease";

    iconsContainer.appendChild(img);

    setTimeout(() => {
      img.style.opacity = "1";
    }, 50);
  });
}

function removeIcons(container) {
  const iconsContainer = container.querySelector("div");
  const icons = iconsContainer.querySelectorAll("img");

  icons.forEach((icon) => {
    icon.style.opacity = "0";
    icon.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      icon.remove();
    }, 500);
  });
}

progDiv.style.position = "relative";
desDiv.style.position = "relative";

let iconsVisibleProg = false;
let iconsVisibleDes = false;

function handleClick(event) {
  event.preventDefault();
  const targetId = event.target.id;

  if (targetId === "programmerText") {
    if (iconsVisibleProg) {
      removeIcons(progDiv);
      iconsVisibleProg = false;
    } else {
      positionsProg = [];
      addIcons(progDiv, "icons prog", iconsProg, positionsProg);
      iconsVisibleProg = true;
    }
  } else if (targetId === "designerText") {
    if (iconsVisibleDes) {
      removeIcons(desDiv);
      iconsVisibleDes = false;
    } else {
      positionsDes = [];
      addIcons(desDiv, "icons des", iconsDes, positionsDes);
      iconsVisibleDes = true;
    }
  }
}

document.querySelector("#programmerText").addEventListener("click", handleClick);
document.querySelector("#designerText").addEventListener("click", handleClick);

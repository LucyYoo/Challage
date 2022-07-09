const body = document.querySelector("body");

const CLASSNAME_PURPLE = "purple";
const CLASSNAME_YELLOW = "yellow";
const CLASSNAME_BLUE = "blue";

if (window.innerWidth > 800) {
  body.classList.add(CLASSNAME_YELLOW);
} else if (window.innerWidth < 800 && window.innerWidth > 600) {
  body.classList.add(CLASSNAME_PURPLE);
} else {
  body.classList.add(CLASSNAME_BLUE);
}

function onBodyColorChange() {
  const width = window.innerWidth;
  if (width > 800) {
    body.classList.remove(CLASSNAME_PURPLE, CLASSNAME_BLUE);
    body.classList.add(CLASSNAME_YELLOW);
  } else if (width < 800 && width > 600) {
    body.classList.remove(CLASSNAME_YELLOW, CLASSNAME_BLUE);
    body.classList.add(CLASSNAME_PURPLE);
  } else {
    body.classList.remove(CLASSNAME_YELLOW, CLASSNAME_PURPLE);
    body.classList.add(CLASSNAME_BLUE);
  }
}

window.addEventListener("resize", onBodyColorChange);

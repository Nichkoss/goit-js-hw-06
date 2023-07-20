function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color")
const span=document.querySelector(".color")

btn.addEventListener("click", onColor)

function onColor() {
  const newColor=getRandomHexColor()
  document.body.style.backgroundColor=newColor
  span.textContent=newColor
}

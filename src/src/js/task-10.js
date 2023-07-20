function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create =document.querySelector('[data-create]')
const clear =document.querySelector('[data-destroy]')
const number = document.querySelector("input")
const box = document.getElementById("boxes")

create.addEventListener("click", onCreate)
clear.addEventListener("click", onClear)
number.addEventListener('change', onClear)

function onCreate() {
  const boxes=[]
  for (let i = 1; i <= number.value; i = i + 1){
    const newDiv = document.createElement('div')
    newDiv.style.width = `${30 + i * 10}px`
    newDiv.style.height = `${30 + i * 10}px`
    newDiv.style.backgroundColor = getRandomHexColor()
    boxes.push(newDiv)
  }
  
  box.append(...boxes)
}

function onClear() {
  box.innerHTML=""
}



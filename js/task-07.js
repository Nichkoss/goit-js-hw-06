const span = document.getElementById("text")
const size = document.getElementById("font-size-control")

size.addEventListener("input", onSize)

function onSize() {
    let font = size.value
    font=`${font}px`
    span.style.fontSize=font
}
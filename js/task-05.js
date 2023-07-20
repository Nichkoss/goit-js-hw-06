const input = document.getElementById("name-input")
const span = document.getElementById("name-output")

input.addEventListener("input", changeSpan)

function changeSpan(e) {
    e.target.value===""?span.textContent="Anonymous":span.textContent=e.target.value
}
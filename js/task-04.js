const decr = document.querySelector('[data-action ="decrement"]')
const incr = document.querySelector('[data-action="increment"]')

const span = document.getElementById("value")

let counterValue = 0

decr.addEventListener("click", onDecr)
incr.addEventListener("click", onIncr)

function onDecr (e) {
    counterValue = counterValue - 1
    span.textContent= counterValue
}
function onIncr() {
    counterValue = counterValue + 1
    span.textContent= counterValue
}




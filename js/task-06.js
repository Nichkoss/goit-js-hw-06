const input = document.getElementById("validation-input")

input.addEventListener("blur", onValid)

function onValid() {
    let length = input.value.length
    if (length === 6) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}
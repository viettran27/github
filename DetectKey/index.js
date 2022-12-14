const btnPress = document.querySelector("#btnPress")
const keyDisplay = document.querySelector(".keyContainer")
let key = document.querySelector("#key")
let keyLocation = document.querySelector("#location")
let which = document.querySelector("#which")
let code = document.querySelector("#code")

document.addEventListener("keydown", e => {
    btnPress.classList.add("hide")
    keyDisplay.classList.add("show")
    document.querySelector(".keyContainer__display").innerHTML = e.which
    key.innerText = e.which == 32 ? "Space" : e.key
    keyLocation.innerText = e.location
    which.innerText = e.which
    code.innerText = e.code
})
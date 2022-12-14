const slider = document.querySelector(".slider")
const container = document.querySelector(".container")
const body = document.querySelector("body")

function render(percent) {
    let width = Math.round(percent*100)
    slider.style.width = `${width}%`
    slider.innerHTML = `${width}%`
    body.style.background = `rgba(0, 0, 0, ${percent})`
}
container.addEventListener("mousemove", e => {
    let widthSlider = e.pageX - container.offsetLeft
    let percent = widthSlider / 600 
    render(percent)
})
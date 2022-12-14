const images = document.querySelectorAll(".image img")
const gallary = document.querySelector(".gallary")
const closeBtn = document.querySelector(".gallary__close")
const gallaryImage = document.querySelector(".gallary__image img")
const prev = document.querySelector(".gallary__control--prev")
const next = document.querySelector(".gallary__control--next")
const sizeImage = images.length

let currentIndex = 0

const showImage = () => {
    if (currentIndex == 0) {
        prev.classList.add("hide")
    } else {
        prev.classList.remove("hide")
    }
    if (currentIndex == sizeImage - 1) {
        next.classList.add("hide")
    } else {
        next.classList.remove("hide")
    }
    gallary.classList.add("show")
    gallaryImage.src = images[currentIndex].src
}

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index
        showImage()
    })
})

closeBtn.addEventListener("click", () => {
    gallary.classList.remove("show")
})

prev.addEventListener("click", () => {

    if (currentIndex > 0) {
        currentIndex--
        showImage()
    }
})

next.addEventListener("click", () => {

    if (currentIndex < sizeImage - 1) {
        currentIndex++
        showImage()
    }
})
document.addEventListener("keydown", e => {
    if (e.keyCode == 27) {
        gallary.classList.remove("show")
    }
})
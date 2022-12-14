const largeImg = document.querySelector("#largeImg")
const listItem = document.querySelectorAll(".listImg__item")
const listImg = document.querySelectorAll(".listImg__item img") 

let temp = 0

function start() {
    changeImg()
}
start()

function render(prevIndex, index) {
    listItem[prevIndex].classList.remove("active")
    temp = index
    largeImg.src = listImg[temp].src
    listItem[temp].classList.add("active")
}

function changeImg() {
    listItem.forEach((item, index) => {
        item.addEventListener("click", () => {
            render(temp, index)
        })
    })
}

function prevImg() {
    let prevIndex = temp
    if (temp > 0)
        temp -= 1
    else
        temp = listItem.length - 1
    
    render(prevIndex, temp)
}

function nextImg() {
    let prevIndex = temp
    lengthImg = listItem.length - 1
    
    if (temp < lengthImg)
        temp += 1
    else
        temp = 0
    
    render(prevIndex, temp)
}
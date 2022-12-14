const inputImage = document.querySelector("#input-img")
const preview = document.querySelector('.preview')

inputImage.addEventListener("change", e => {
    let file = e.target.files[0]
    if (!file) return

    let img = document.createElement('img')
    img.src = URL.createObjectURL(file)

    preview.appendChild(img)
})
preview.addEventListener("dragover", e => {
    e.stopPropagation()
    e.preventDefault()
})

preview.addEventListener("drop", e => {
    e.stopPropagation()
    e.preventDefault()
    
    let file = e.dataTransfer.files[0]
    
    if (!file) return

    let img = document.createElement('img')
    img.src = URL.createObjectURL(file)

    preview.appendChild(img)
})
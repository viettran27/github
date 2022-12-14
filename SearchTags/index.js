let ul = document.querySelector(".container__wrapper"),
    input = document.querySelector(".container__wrapper-input")

let tags = ["ReactJS", "JS"]

const render = tags => {
    ul.innerHTML= ""
    tags.forEach((tag,index) => {
        let li =`<li class="container__wrapper-tag">
                    ${tag}
                    <i class="fas fa-times" onclick="removeTag(this, ${index})"></i>
                </li>`
        ul.innerHTML += li
    });
    ul.appendChild(input)
    input.focus()
}
render(tags)

const active = e => {
    if (e.key == "Enter") {
        tag = e.target.value.trim()
        if (!tags.includes(tag) && tag != "") {
            tags.push(e.target.value.trim())
        }
        render(tags)
        e.target.value = ""
    }
}

input.addEventListener("keyup", active)


const removeTag = (tag, index) => {
    tags.splice(index, 1)
    render(tags)
}

const removeAll = () => {
    tags = []
    render(tags)
}


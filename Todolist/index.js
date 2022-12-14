const form = document.querySelector("#form")
const input = document.querySelector("#input")
const ul = document.querySelector("#list_todo")

function start() {
    const data = JSON.parse(localStorage.getItem("todo"))
    if (data != null) {
        renderAllWork(data)
    }
    handleReturnWork()
}
start()

function renderAllWork(data) {
    let works = data.map(work => {
        let done = work.done ? "line-through" : ""
        
        return `<li class="todo__list-item" onclick="workDone(this)">
                    <p id="work" class="${done}">${work.name}</p>
                    <i class="fas fa-trash" onclick="removeWork(this)"></i>
                </li>`
    })
    ul.innerHTML = works.join("")
}

function renderWork(work) {
    let html = `<li class="todo__list-item" onclick="workDone(this)">
                    <p id="work">${work}</p>
                    <i class="fas fa-trash" onclick="removeWork(this)"></i>
                </li>`

    ul.insertAdjacentHTML("beforeend", html)
    input.value = ""
}

function handleReturnWork() {
    form.addEventListener("submit", e => {
        e.preventDefault()
        if (input.value != "") {
            let work = input.value
            renderWork(work)
            updateStorage()
        }
    })
}

function updateStorage() {
    let data = []
    const listWork = document.querySelectorAll("li")
    listWork.forEach(work => {
        let name = work.querySelector("p")
        let workdata = {
            name: name.innerHTML,
            done: name.classList.contains("line-through")
        }
        data.push(workdata)
    })
    console.log(data);
    localStorage.setItem("todo", JSON.stringify(data))
}

function removeWork(work) {
    let itemWork = work.parentElement
    itemWork.remove()
}
function workDone(work) {
    let nameWork = work.querySelector("p")
    nameWork.classList.toggle("line-through")
    updateStorage()
}

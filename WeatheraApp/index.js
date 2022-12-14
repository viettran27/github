function start() {
    getInfo("haiphong", render)
    getWeather()
}
start()


function getInfo(city, callback) {
    const cityAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    fetch(cityAPI)
        .then(res => res.json())
        .then(callback)
}

function render(data) {
    const city = document.querySelector("#city")
    const country = document.querySelector("#country") 
    const date = document.querySelector("#date") 
    const temperature = document.querySelector("#temperature") 
    const visibility = document.querySelector("#visibility") 
    const wind = document.querySelector("#wind") 
    const cloud = document.querySelector("#cloud") 

    city.innerHTML = data.name + ","
    country.innerHTML = data.sys.country
    date.innerHTML = new Date().toLocaleString()
    temperature.innerHTML = Math.round(data.main.temp)
    visibility.innerHTML = data.visibility + "(m)"
    wind.innerHTML = data.wind.speed + "(m/s)"
    cloud.innerHTML = data.clouds.all + "(%)"
}

function getWeather() {
    const input = document.getElementById("input")
    
    input.addEventListener("keyup", e => {
        if (e.key == "Enter") {
            city = e.target.value
            getInfo(city, render)
        }
    })
}
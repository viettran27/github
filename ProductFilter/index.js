const ProductAPI = "https://fakestoreapi.com/products"

function start() {
    getData(renderProduct)
    getData(searchProduct)
}
start()

function getData(callback) {
    fetch(ProductAPI)
        .then(res => res.json())
        .then(callback)
}

function renderProduct(data) {
    lengthData = data.length
    let html = ""
    data.forEach(product => {
        html += `<li class="container__list-item">
                    <img src="${product.image}" alt="">
                    <div class="container__list-item-detail">
                        <h4>${product.title}</h4>
                        <span>${product.price}$</span>
                    </div>
                </li>`
    });
    
    const listProduct = document.querySelector(".container__list")
    listProduct.innerHTML = html
}

function searchProduct(data) {
    const search = document.querySelector("#search")
    search.addEventListener("keyup", e => {
        let tittle = e.target.value;    
        filterProduct(data,tittle)
    })
}

function filterProduct(data, tittle) {
    let listFilter = data.filter(product => {
        return product.title.toLowerCase().includes(tittle.toLowerCase())
    })
    if (tittle == " ") {
        renderProduct(listItem)
    } else {
        renderProduct(listFilter)
    }
}




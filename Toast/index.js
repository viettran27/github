const allToast = {
    success: {
        icon: 'fas fa-check-circle',
        msg: 'This is a succes message'
    },
    warning: {
        icon: 'fas fa-check-circle',
        msg: 'This is a warning message'
    },
    error: {
        icon: 'fas fa-check-circle',
        msg: 'This is a error message'
    },
}

function renderToast(id) {
    const toastContainer = document.querySelector(".toast")
    let notification = {}
    if (id == 'toast__success')
        notification = allToast.success
    if (id == 'toast__warning') 
        notification = allToast.warning
    if (id == 'toast__error') 
        notification = allToast.error

    let toast__notification = document.createElement('div')
    toast__notification.className = "toast__notification"
    toast__notification.setAttribute('id', id)

    toast__notification.innerHTML = `<i class="${notification.icon}"></i>
                                <p>${notification.msg}</p>
                                <span class="toast__notification-line"></span>`
      
    toastContainer.insertAdjacentElement('beforeend', toast__notification)
    setTimeout(() => {
        toast__notification.style.animation = `hideToast 1s ease forwards`
    }, 4000)
    setTimeout(() => {
        toast__notification.remove()
    }, 6000)
}

let userName = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let password2 = document.querySelector("#password2")
let loginBtn = document.querySelector("#login")

const noticeError = (input, messege) => {
    const registerForm = input.parentElement
    registerForm.classList.add("error")
    let notice = registerForm.querySelector(".notice")
    notice.innerText = messege
}

const noticeSuccess = input => {
    const registerForm = input.parentElement
    registerForm.classList.remove("error")
    let notice = registerForm.querySelector(".notice")
    notice.innerText = ""
}

const checkEmail = input => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		noticeSuccess(input)
	} else {
		noticeError(input, 'Email is not valid')
	}
}

const checkRequired = inputArr => {
    let isRequired = false

    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            isRequired = true
            noticeError(input, `${getFieldName(input)} is required`)
        } else 
            noticeSuccess(input)
    })
    return isRequired
}

const checkLength = (input, min, max) => {
	if (input.value.length < min) {
		noticeError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		)
	} else if (input.value.length > max) {
		noticeError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		)
	} else {
		noticeSuccess(input)
	}
}

const checkPasswordsMatch = (input1, input2) => {
	if (input1.value !== input2.value) {
		noticeError(input2, 'Passwords do not match')
	}
}

const getFieldName = input => {
    return input.name
}

loginBtn.addEventListener("click", e => {
    if (!checkRequired([userName, email, password, password2])) {
        checkLength(username, 3, 15)
		checkLength(password, 6, 25)
		checkEmail(email)
		checkPasswordsMatch(password, password2)
    }
})

const togglePass = input => {
    const registerForm = input.parentElement
    const inputPass = registerForm.querySelector(".register__form-input")
    const showPassIcon = registerForm.querySelector(".showPass")
    const secretPassIcon = registerForm.querySelector(".secretPass")

    if (showPassIcon.classList.contains("hide")) {
        secretPassIcon.classList.add("hide")
        showPassIcon.classList.remove("hide")
        inputPass.type = "password"
    } else {
        secretPassIcon.classList.remove("hide")
        showPassIcon.classList.add("hide")
        inputPass.type = "text"
    }
}
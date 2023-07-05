const login = document.getElementById('login')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const error = document.querySelector('#error')
const error_in = document.querySelector('#error_in')
const form = document.querySelector('#form')

const form_login = document.querySelector('#form_login')
const login_in = document.querySelector('#login_in')
const password_in = document.querySelector('#password_in')

function validation(form) {
    let res = true
    form.querySelectorAll('input').forEach(input => {
        if (input.value == '') {
            res = false
        }
    })
    return res
}

function checkUsers(log) {
    let res = true
 baseUsers.forEach(el => {
    if (el.login == log) {
        res = false
    }
 })
 return res
}


form.addEventListener('submit', auth)

function auth(event) {
    event.preventDefault()
        if ((form.login.value.trim() && form.password.value !== '') && checkUsers(login.value)) {
            const user = new Users(login.value.trim(), password.value, 'id' + Date.now())
            baseUsers.push(user)
            localStorage.setItem('users', JSON.stringify(baseUsers))
            error.innerHTML = 'Успешная регистрация'
            login.value = ''
            password.value = ''
        }else {
            error.innerHTML = 'Логин занят или неверный пароль'
        }}
    

form_login.addEventListener('submit', inn)

function inn(event) {
    let keyUsers = []
        baseUsers.forEach(el => {
            if (el.login.toLowerCase() === login_in.value && el.password === password_in.value) {
                keyUsers.push(el.login)
                console.log(keyUsers)
            }
        })
        if (keyUsers.length === 1) {
            localStorage.setItem('key', JSON.stringify(keyUsers))
        } else {
            error_in.innerHTML = 'Неверный логиин или пароль'
            event.preventDefault()
        }
    }

  
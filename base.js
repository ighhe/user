let baseUsers = [
    {
    login: 'admin',
    password: 'admin',
    id: 1,
}
]

if (localStorage.getItem('users')) {
    baseUsers = JSON.parse(localStorage.getItem('users'))
}

class Users {
    constructor(login, password, id) {
        this.login = login
        this.password = password
        this.id = id
    }
}

class Dohod {
    constructor(summa, id) {
        this.summa = summa
        this.id = id+1
    }
}

class Rashod {
    constructor(value2, idM) {
        this.value2 = value2
        this.idM = idM+1
    }
}

let keyUsers = []
if (localStorage.getItem('key')) {
    keyUsers = JSON.parse(localStorage.getItem('key'))
}
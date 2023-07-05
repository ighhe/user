const dohod = document.querySelector('#dohod')
const rashod = document.querySelector('#rashod')
const select = document.querySelector('#select')
const sum = document.querySelector('#sum')
const add = document.querySelector('#add')
const two1 = document.querySelector('.two1')
const two2 = document.querySelector('.two2')
const btn = document.querySelector('#btnDel')
const exit = document.querySelector('#exit')
const unlogin = document.querySelector('#unlogin')
const full_p = document.querySelector('.full_plus')
const full_m = document.querySelector('.full_minus')


let plus = []
let minus = []
let id = 0
let idM = 0

const keyyFind = keyFind()

if (localStorage.getItem('key')) {
    if(localStorage.getItem(`'${keyyFind}+'`)){
    plus = JSON.parse(localStorage.getItem(`'${keyyFind}+'`))
    printDisplayPlus()
}

if(localStorage.getItem(`'${keyyFind}-'`)){
    minus = JSON.parse(localStorage.getItem(`'${keyyFind}-'`))
    printDisplayMinus()
}
}



add.onclick = function() {

    let index = select.selectedIndex
    if (sum.value != '') {
    if (index === 1) {
        const summ = new Dohod(sum.value, id++)
        plus.push(summ)
        const keyyFind = keyFind() + '+'
        printDisplayPlus()
        localStorage.setItem(`'${keyyFind}'`, JSON.stringify(plus))
        sum.value = ''
    } else if (index === 2) {
        const sumMinus = new Rashod(sum.value, idM++)
        minus.push(sumMinus)
        const keyyFind = keyFind() + '-'
        printDisplayMinus()
        localStorage.setItem(`'${keyyFind}'`, JSON.stringify(minus))
        sum.value = ''
}    
    }
    
}

function printDisplayPlus() {
    let message = ''
    plus.forEach(({id, summa}) => {
    message += `
    <div class="container">
        <div class="summa">
           <div id="img_p"> </div>${Number(summa).toLocaleString()} ₽</div>
        <div class="del" id="${id++}">
        <button id="btnDel">Удалить</button>
        </div>
    </div>
    `  
    dohod.innerHTML = message  
    let f = full(plus)
    full_p.innerHTML = Number(full(plus)).toLocaleString() + '₽'
    });
}

function printDisplayMinus() {
    let message = ''
    minus.forEach(({idM, value2}) => {
        message += `
    <div class="container">
        <div class="summa">
        <div id="img_m"></div> <div>${Number(value2).toLocaleString()} ₽</div>
        </div>
        <div class="del" idM="${idM++}">
        <button id="btnDel">Удалить</button>
        </div>
    </div>
    `  
    rashod.innerHTML = message  
    full_m.innerHTML = Number(full2(minus)).toLocaleString() + '₽'
    });
}


function keyFind() {
    const keyy = keyUsers[0]
    return keyy
}

two1.addEventListener('mousedown', delEl)

function delEl(event) {
    let s = event.target
    let ss = s.parentNode.getAttribute('id')
    
    const res = plus.filter(el => (el.id!=ss))
    plus = res

    const keyyFind = keyFind() + '+'
    localStorage.removeItem(`'${keyyFind}'`)
    localStorage.setItem(`'${keyyFind}'`, JSON.stringify(plus))

    if (plus.length != 0) {
        printDisplayPlus()
    }else dohod.innerHTML = ''
    full_p.innerHTML = full(plus)
    
}

two2.addEventListener('mousedown', delElM)

function delElM(event) {
    let s = event.target
    let ss = s.parentNode.getAttribute('idM')
    
    const res = minus.filter(el => (el.idM!=ss))
    minus = res

    const keyyFind = keyFind() + '-'
    localStorage.removeItem(`'${keyyFind}'`)
    localStorage.setItem(`'${keyyFind}'`, JSON.stringify(minus))

    if (minus.length != 0) {
        printDisplayMinus()
    }else rashod.innerHTML = ''
    full_m.innerHTML = full2(minus)
}

unlogin.addEventListener('click', exitt)

function exitt() {
    localStorage.removeItem('key')
    keyUsers = []
}

function full(array) {
    let a = 0
    array.forEach(el => {
        a = a + Number(el.summa)
        return a 
    });
    return a
}

function full2(array) {
    let a = 0
    array.forEach(el => {
        a = a + Number(el.value2)
        return a 
    });
    return a
}

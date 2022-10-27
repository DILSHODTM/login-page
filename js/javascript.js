"use strict"

const conTainer = document.querySelector('.container')
const conTainer2 = document.querySelector('.container2')
const conTainer3 = document.querySelector('.container3')
const btnchange = document.querySelector('.btn')
const btnChange2 = document.querySelector('.btn2s')
const btnsunss = document.querySelector('.btnsunss')
const btns = document.querySelector('.btnmoonss')
const btnsuns = document.querySelector('.btnsun')
const btn = document.querySelector('.btnmoon')
const body = document.querySelector('.bodys')
const spans = document.querySelector('.spans')
const signUpform = document.querySelector('#signup-form')
const signUpforms = document.querySelector('#signup-forms')
const message = document.querySelector('.message')
const messageq = document.querySelector('.messageq')
const messages = document.querySelector('.messages')
const messageo = document.querySelector('.messageo')
const messageg = document.querySelector('.messageg')

const messagek = document.querySelector('.messagek')
const messageoy = document.querySelector('.messageoy')
const messageyil = document.querySelector('.messageyil')

const regEx = /^[a-zA-Z0-9]{6,12}$/
const regExv = /^[a-zA-Z]{3,16}$/
const regExm = /^[A-Z]{3,16}$/
const regExs = /^[0-9]{1,5}$/
const reg = document.querySelector('.inputs')
const reg2 = document.querySelector('.inputs2')
const reg3 = document.querySelector('.inputs3')




// buttons



btnsuns.addEventListener('click', () => {
    btnsuns.style.cssText = 'display:none;'
    btn.style.cssText = 'display:inline;'
    document.body.style.backgroundImage = "url('../images/pexels-sagui-andrea-618833.jpg')";
})

btn.addEventListener('click', () => {
    btn.style.cssText = 'display:none;'
    btnsuns.style.cssText = 'display:inline; '
    document.body.style.backgroundImage = "url('../images/moon.jpg')";
})

btnsunss.addEventListener('click', () => {
    btnsunss.style.cssText = 'display:none;'
    btns.style.cssText = 'display:inline;'
    document.body.style.backgroundImage = "url('../images/pexels-sagui-andrea-618833.jpg')";
})

btns.addEventListener('click', () => {
    btns.style.cssText = 'display:none;'
    btnsunss.style.cssText = 'display:inline; '
    document.body.style.backgroundImage = "url('../images/moon.jpg')";
})
btnchange.addEventListener('click', () => {
    conTainer.style.cssText = 'display:none;'
    conTainer2.style.cssText = 'display:block;'
})
btnChange2.addEventListener('click', () => {
    conTainer2.style.cssText = 'display:none;'

    conTainer3.style.cssText = 'display:block;'
})



// buttons end


// first page
signUpform.addEventListener('submit', (e) => {
    e.preventDefault()
    const result = regEx.test(signUpform.username.value)

    if (result) {
        message.textContent = ((signUpform.username.value).toUpperCase())

    } else {
        message.textContent = "noto'gri malumot kiritildi"

    }


})


signUpform.addEventListener('keypress', (e) => {


    if (regEx.test(signUpform.password2.value)) {

        message.textContent = "to'gri malumot kiritildi"
        reg3.style.cssText = 'border:5px solid green;'

    } else if (regEx.test(signUpform.password.value)) {
        message.textContent = "to'gri malumot kiritildi"
        reg2.style.cssText = 'border:5px solid green;'
    } else if (regEx.test(signUpform.username.value)) {
        message.textContent = "to'gri malumot kiritildi"
        reg.style.cssText = 'border:5px solid green;'


    } else {
        message.textContent = "noto'gri malumot kiritildi"
        reg.style.cssText = 'border:5px solid red;'
        reg2.style.cssText = 'border:5px solid red;'
        reg3.style.cssText = 'border:5px solid red;'
    }
}

)





// first page end

// second page

signUpforms.addEventListener('submit', (s) => {
    s.preventDefault()

    const surName = regEx.test(signUpforms.surname.value)
    const firstName = regEx.test(signUpforms.namesa.value)
    const viloyat = regExv.test(signUpforms.viloyatlar.value)
    const geNs = regExv.test(signUpforms.gens.value)
    const day = regExs.test(signUpforms.days.value)
    const month = regExm.test(signUpforms.month.value)
    const year = regExs.test(signUpforms.years.value)


    if (firstName) {
        messages.textContent = ((signUpforms.namesa.value).toUpperCase())
    }
    else {

        messages.textContent = "noto'gri malumot kiritildi"
    }

    if (surName) {
        messageq.textContent = ((signUpforms.surname.value).toUpperCase())

    }
    else {
        messageq.textContent = "noto'gri malumot kiritildi"
    }

    if (viloyat) {
        messageo.textContent = ((signUpforms.viloyatlar.value).toUpperCase())
    }
    else {

        messageo.textContent = "noto'gri malumot kiritildi"
    }
    if (geNs) {
        messageg.textContent = ((signUpforms.gens.value).toUpperCase())
    }
    else {

        messageg.textContent = "noto'gri malumot kiritildi"
    }
    if (day) {
        messagek.textContent = (signUpforms.days.value)

    }
    else {
        messagek.textContent = "noto'gri malumot kiritildi"
    }

    if (month) {
        messageoy.textContent = (signUpforms.month.value)
    }
    else {

        messageoy.textContent = "noto'gri malumot kiritildi"
    }
    if (year) {
        messageyil.textContent = (signUpforms.years.value)
    }
    else {

        messageyil.textContent = "noto'gri malumot kiritildi"
    }


})
// second page end










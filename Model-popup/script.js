const button = document.querySelector('.button')
const closeicon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup-container')
const overlay = document.querySelector('.overlay')
const subbutton = document.querySelector('.sub-button')
button.addEventListener('click',(e)=>{
popup.classList.add('popup-open')

})

closeicon.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})

overlay.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})

subbutton.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})
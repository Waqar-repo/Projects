const hamburgericon = document.querySelector('.hamburger-menu')
const headercontent = document.querySelector('.header-content')
const closeicon = document.querySelector('.close-icon')

const nav = document.querySelector('nav')
nav.addEventListener('click',(e)=>{


})
hamburgericon.addEventListener('click',(e)=>{
    headercontent.classList.add('menu-open')

})
headercontent.addEventListener('click',(e)=>{
e.stopPropagation()
})
closeicon.addEventListener('click',(e)=>{
    headercontent.classList.remove('menu-open')
     
})
document.querySelector("#top > main > footer > h3").addEventListener('click',()=>{
    document.querySelector("body > div").scrollTo(0,0)
})

window.addEventListener('click',(e)=>{
    headercontent.classList.remove('menu-open')
     
})
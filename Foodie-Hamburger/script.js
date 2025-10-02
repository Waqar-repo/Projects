const hamburgericon = document.querySelector('.hamburger-menu')
const headercontent = document.querySelector('.header-content')
const closeicon = document.querySelector('.close-icon')


hamburgericon.addEventListener('click',(e)=>{
    headercontent.classList.add('menu-open')
})

closeicon.addEventListener('click',(e)=>{
    headercontent.classList.remove('menu-open')
})
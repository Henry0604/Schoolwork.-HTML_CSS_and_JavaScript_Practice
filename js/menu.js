const menu = document.querySelector('.menu');
const navegar = document.querySelector('.menu-navegacion');

menu.addEventListener('click', ()=>{
    navegar.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(navegar.classList.contains('spread') && e.target != navegar && e.target != menu  ){
        navegar.classList.toggle("spread")
    }
})
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesblancas = document.querySelector('.agregar-imagen')
const cotenedorwhite = document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu')

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerimg(imagen.getAttribute('src'))
    })
});

cotenedorwhite.addEventListener('click', (e)=>{
    if(e.target !== imagenesblancas){
        cotenedorwhite.classList.toggle('show')
        imagenesblancas.classList.toggle('showimg')
        menu1.style.opacity = '1'
    }
})

const aparecerimg = (imagen)=>{
    imagenesblancas.src = imagen;
    cotenedorwhite.classList.toggle('show')
    imagenesblancas.classList.toggle('showimg')
    menu1.style.opacity = '0'
}
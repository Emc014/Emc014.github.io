let menu = document.querySelector('#botonMenu');
let cerrarMenu = document.querySelector('#BotonCerrar');
menu.addEventListener('click',()=>{
    document.querySelector('header').classList.add("menuOpen")
})
cerrarMenu.addEventListener('click',()=>{
    document.querySelector('header').classList.remove("menuOpen")
})

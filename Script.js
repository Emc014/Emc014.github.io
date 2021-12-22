let menu = document.querySelector('#botonMenu');
let cerrarMenu = document.querySelector('#BotonCerrar');
menu.addEventListener('click',()=>{
    document.querySelector('header').classList.add("menuOpen")
})
cerrarMenu.addEventListener('click',()=>{
    document.querySelector('header').classList.remove("menuOpen")
})



document.addEventListener('mousemove',(e)=>{
    let topMouse = e.clientY
    let leftMouse = e.clientX
    let widthDisplay= window.innerWidth/2
    let heightDisplay= window.innerHeight/2
    if(window.scrollY > 1800){
        // setTimeout(()=>{
            console.log(`alto:${topMouse}, ancho:${leftMouse}`)
            document.querySelectorAll(`#misConocimientos>div`).forEach((e,i)=>{
                e.style.top= ((-topMouse+heightDisplay)/(i===1 ? 2 :(i===2 ? 4 : 6)))+"px";
                e.style.left= ((-leftMouse+widthDisplay)/(i===1 ? 2 :(i===2 ? 4 : 6)))+"px";
            })
        // },30)
    }
})

let contadorFPS = ()=>{
    //let contador = 
}
let menu = document.querySelector('#botonMenu');
let cerrarMenu = document.querySelector('#BotonCerrar');
menu.addEventListener('click',()=>{
    document.querySelector('header').classList.add("menuOpen")
})
cerrarMenu.addEventListener('click',()=>{
    document.querySelector('header').classList.remove("menuOpen")
})

document.querySelectorAll('.cImg').forEach((e,i)=>{
    console.log(i)
    let Posiciones= [
        [15,15],
        [70,70],
        [57,60],
        [15,30],
        [70,30],
        [30,45],
        [85,15],
        [45,25],
        [87,63],
        [74,56],
        [89,52],
        [15,80],
        [20,90],
        [60,75],
        [45,80],
        [25,60],
        [15,70],
        [35,86]
    ]
    e.style.top= `${Posiciones[i][0]}%`
    e.style.left=`${Posiciones[i][1]}%`
})

document.addEventListener('mousemove',(e)=>{
    let topMouse = e.clientY
    let leftMouse = e.clientX
    let widthDisplay= window.innerWidth/2
    let heightDisplay= window.innerHeight/2
    if(window.scrollY >1800){
        // setTimeout(()=>{
            console.log(`alto:${topMouse}, ancho:${leftMouse}`)
            document.querySelectorAll(`#misConocimientos img`).forEach((e,i)=>{
                e.style.top= ((-topMouse+heightDisplay)/(i<6 ? 2 :(i<13 ? 4 : 6)))+"px";
                e.style.left= ((-leftMouse+widthDisplay)/(i<6 ? 2 :(i<13 ? 4 : 6)))+"px";
            })
        // },30)
    }
})

let contadorFPS = ()=>{
    let contador = 
}
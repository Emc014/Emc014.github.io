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
let refres;
document.addEventListener('mousemove',(e)=>{
    window.clearTimeout(refres)
    let topMouse = e.clientY
    let leftMouse = e.clientX
    console.log(`alto:${topMouse}, ancho:${leftMouse}`)
    refres = setTimeout(()=>{
        document.querySelectorAll(`#misConocimientos img`).forEach(e=>{
            e.style.top= (-topMouse)+"px";
            e.style.left= (-leftMouse)+"px";
        })
    },10)
})
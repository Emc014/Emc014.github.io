function cambiarFotograma(n){
    let e=document.querySelector('.grid1')
    let clases = [1,2,3,4,5,6,7]
    clases.forEach(c=>{
        e.classList.remove(`fotograma${c}`)
    })
    e.classList.add(`fotograma${n}`)
}

window.addEventListener('scroll',timeLine)

function timeLine(){
    let altoScroll=window.scrollY
    //Fotograma1
    if(altoScroll>0 && altoScroll<300){
        cambiarFotograma(1)
    }
    if(altoScroll>300 && altoScroll<600){
        cambiarFotograma(2)
    }
    if(altoScroll>600 && altoScroll<900){
        cambiarFotograma(3)
    }
    if(altoScroll>900 && altoScroll<1200){
        cambiarFotograma(4)
    }
    if(altoScroll>1200 && altoScroll<1500){
        cambiarFotograma(5)
    }
    if(altoScroll>1500){
        cambiarFotograma(6)
    }
    if(altoScroll>1800){
        document.querySelector('.grid1').classList.add('fotograma7')
    }
    
}
timeLine()
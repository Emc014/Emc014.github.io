const navegar=(id1,id2)=>{
    document.querySelectorAll(id1).forEach(e=>{
        e.addEventListener('click',()=>{
            document.querySelector(id2).scrollIntoView({behavior:'smooth'})
        })
    })
}

navegar('.contenFlechas','.servicios')
navegar('.homeNav','.home')
navegar('.serviciosNav','.servicios')
navegar('.contactoNav','.contacto')
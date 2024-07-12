const olhos = [...document.querySelectorAll('.olho')]

let posxMouse = 0
let posyMouse = 0

window.addEventListener('mousemove', (evt)=>{
    posxMouse=evt.clientX
    posyMouse=evt.clientY

    const rotacao = Math.atan2(posyMouse, posxMouse) * 180 / Math.PI

    olhos.map((o)=>{
        o.style.transform=`rotate(${rotacao}deg)`
    })
})
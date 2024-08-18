const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')
const btn_rodar = document.querySelector('#btn_rodar')
// const btn_esquerda = document.querySelector('#btn_esquerda')
// const btn_direita = document.querySelector('#btn_direita')

const init = () => {
    carro.style.position='relative'
    carro.style.left='0px'
    carro.style.width='100px'
    carro.style.height='40px'
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
    // tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0

// const mover = (dir) => {
//     if (dir > 0 && parseInt(carro.style.left) <= tamMax) {
//         let pos = parseInt(carro.style.left)
//         pos+=(10*dir)
//         carro.style.left = `${pos}px`
//         anima=setTimeout(mover,20,dir)
//     } else if (dir < 0 && parseInt(carro.style.left) >= 0) {
//         let pos = parseInt(carro.style.left)
//         pos+=(10*dir)
//         carro.style.left = `${pos}px`
//         anima=setTimeout(mover,20,dir)
//     } else {
//         clearTimeout(anima)
//     }
//     console.log(tamMax)
// }

const mover = () => {
    if (parseInt(carro.style.left) >= tamMax) {
        dir = -1
    } else if (parseInt(carro.style.left) <= 0) {
        dir = 1
    }
    let pos = parseInt(carro.style.left)
    pos+=(10*dir)
    carro.style.left = `${pos}px`
    anima=setTimeout(mover,20)
}

btn_parar.addEventListener('click', ()=>{
    // clearInterval(anima)
    clearTimeout(anima)
})

btn_rodar.addEventListener('click', ()=>{
    mover()
})

// btn_esquerda.addEventListener('click', ()=>{
//     clearTimeout(anima)
//     mover(-1)
//     // clearInterval(anima)
//     // anima=setInterval(mover, 20, -1)
// })

// btn_direita.addEventListener('click', ()=>{
//     clearTimeout(anima)
//     mover(1)
//     // clearInterval(anima)
//     // anima=setInterval(mover, 20, 1)
// })

// window.onload=init
window.addEventListener('load', init())

window.addEventListener('resize', ()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener('keydown', (evt) => {
    if (evt.code==='ArrowUp'){
        carro.style.width=parseInt(carro.style.width)+10+'px'
        carro.style.height=parseInt(carro.style.height)+10+'px'
    }
    if (evt.code==='ArrowDown'){
        carro.style.width=parseInt(carro.style.width)-10+'px'
        carro.style.height=parseInt(carro.style.height)-10+'px'
    }
    tamCarro=parseInt(carro.style.width)
    tamMax=window.innerWidth - tamCarro
})
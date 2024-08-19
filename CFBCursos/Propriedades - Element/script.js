const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

let DOMRect_q1 = q1.getBoundingClientRect()
let DOMRect_q2 = q2.getBoundingClientRect()

q1.accessKey='b'
q2.accessKey='n'

console.log(`q1: ${q1.accessKey}`)
console.log(`q2: ${q2.accessKey}`)

const info = (el) => {
    posx.innerHTML=`posx: ${el.x}`
    posy.innerHTML=`posy: ${el.y}`
    largura.innerHTML=`largura: ${el.width}`
    altura.innerHTML=`altura: ${el.height}`
}

q1.addEventListener('click',(evt)=>{
    info(DOMRect_q1)
})

q2.addEventListener('click',(evt)=>{
    info(DOMRect_q2)
})
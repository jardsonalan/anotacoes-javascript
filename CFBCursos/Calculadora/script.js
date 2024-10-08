const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const tcpy = document.querySelector('#tcpy')
const tlimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector('#tigual')
const calc_aba = document.querySelector('#calc-aba')
const calc = document.querySelector('#calc')
const arrow = document.querySelector('#arrow')

let sinal = false
let decimal = false

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        sinal=false
        if(evt.target.innerHTML==','){
            if(!decimal){
                decimal=true
                if(display.innerHTML=='0'){
                    display.innerHTML='0,'
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }  
        } else {
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
            if(evt.target.innerHTML=='x'){
                display.innerHTML+='*'
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener('click', (evt)=>{
    sinal=false
    decimal=false
    display.innerHTML='0'
})

tigual.addEventListener('click', (evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})

// Copiando para área de transferência do Windows
tcpy.addEventListener('click', (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)

    // teste.select()
    // teste.setSelectionRange(0, 99999) // Mobile
    // navigator.clipboard.writeText(teste.value)
})

calc_aba.addEventListener('click', (evt)=>{
    calc.classList.toggle('calc-exibir')
    if (calc.classList.contains('calc-exibir')){
        arrow.innerHTML = 'arrow_left'
    } else {
        arrow.innerHTML = 'arrow_right'
    }
})
const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click', (evt)=>{
    alert('Olá, como você está?')
})

btn_confirm.addEventListener('click', (evt)=>{
    const retorno = confirm('Você está aprendendo muito?')
    if (retorno){
        console.log('OK')
    } else {
        console.log('Error')
    }
})

btn_prompt.addEventListener('click', (evt)=>{
    const nome = prompt('Como é seu nome?', 'Digite seu nome aqui')
    if (nome == null) {
        console.log('Error')
    } else {
        console.log(`Nome digitado: ${nome}`)
    }
})
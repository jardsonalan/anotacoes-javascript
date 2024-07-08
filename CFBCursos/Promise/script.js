// Gera uma promessa e entrega quando estiver pronta

const numero = document.querySelector('#numero')
const btn_promessa = document.querySelector('#btn_promessa')

btn_promessa.addEventListener('click', (evt)=>{
    numero.innerHTML='Processando...'
    promessa()
        .then((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        }) // Se deu certo
        .catch((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.add('erro')
            numero.classList.remove('ok')
        }) // Se deu errado
})

const promessa=()=>{
    let promise = new Promise((resolve, reject)=>{
        let resultado = true
        let tempo = 3000
    
        setTimeout(()=>{
            if(resultado){
                resolve('Tudo certo!') // Se a Promise der certo
            }else{
                reject('Deu tudo errado!') // Se a Promise der erro
            }
        },tempo)
    })
    return promise
}

numero.innerHTML='Esperando'
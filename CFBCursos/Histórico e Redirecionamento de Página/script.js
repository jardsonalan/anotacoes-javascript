const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener('click', (evt)=>{
    // window.location='https://www.google.com.br'
    // window.location.replace('https://www.google.com.br') // Deleta a URL corrente do histórico
    // window.location.assign('https://www.google.com.br') // NÃO deleta a URL corrente do histórico
    // window.location.reload() // Recarrega à página
    // window.history.back() // Volta o histórico
    // window.history.forward() // Próxima página do histórico
    // window.history.go(2) // Serve para navegar mais de uma página
    // console.log(window.history.length)
    // console.log(url.value)
    window.location=url.value
})
const div_relogio = document.querySelector('#div_relogio')
const div_data = document.querySelector('#div_data')
const btn_ativar = document.querySelector('#btn_ativar')
const btn_parar = document.querySelector('#btn_parar')
const tmp_alarme = document.querySelector('#tmp_alarme')
const hora_alarme = document.querySelector('#hora_alarme')
const timer = document.querySelector('#timer')

const som_alarme = new Audio('midia/hip-hop.mp3')
som_alarme.loop=-1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener('click', (evt)=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)
    hora_alarme.innerHTML = `Hora do Alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

btn_parar.addEventListener('click', (evt)=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML = 'Hora do Alarme:'
    tmp_alarme.value=0
    timer.classList.remove('alarme')
    som_alarme.pause();
    som_alarme.currentTime=0;
})

const data = new Date()

let diaMes = data.getDate()
diaMes=diaMes<10?'0'+diaMes:diaMes

let mesAno = data.getMonth()
mesAno=mesAno<10?'0'+mesAno:mesAno

const dataResume = diaMes+'/'+mesAno+'/'+data.getFullYear()

div_data.innerHTML = dataResume

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora=hora<10?'0'+hora:hora
    let minuto = data.getMinutes()
    minuto=minuto<10?'0'+minuto:minuto
    let segundos = data.getSeconds()
    segundos=segundos<10?'0'+segundos:segundos
    const horaCompleta = hora+':'+minuto+':'+segundos
    div_relogio.innerHTML = horaCompleta
    if(alarme_ativado && !alarme_tocando) {
        if(data.getTime()>=ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo = setInterval(relogio, 1000) // setInterval chama a função relogio a cada 1 segundo

// console.log(Date.now()) // Timestamp

// console.log(data.toDateString())
// console.log(`Mês: ${data.getDate()}`)
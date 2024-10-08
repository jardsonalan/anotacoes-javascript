class Npc {
    static alerta=false
    constructor(energia){
        this.energia = energia;
    }

    info=()=>{
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?'Sim':'Não'}`)
        console.log('------------------------')
    }
    static alertar = () => {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Npc.alertar()

npc1.info()
npc2.info()
npc3.info()

// console.log(npc1.energia)
// console.log(npc2.energia)
// console.log(npc3.energia)
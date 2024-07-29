import c from "./modules/contatos.js"

const listaContatos = document.querySelector('#listaContatos')
const btn_gravar = document.querySelector('#btn_gravar')
const v_nome = document.getElementById('f_nome')
const v_telefone = document.getElementById('f_telefone')
const v_email = document.getElementById('f_email')

btn_gravar.addEventListener('click', (evt)=>{
    const cont={
        nome: v_nome.value,
        telefone: v_telefone.value,
        email: v_email.value
    }
    c.addContato(cont, listaContatos)
    console.log(c.getTodosContatos())
})
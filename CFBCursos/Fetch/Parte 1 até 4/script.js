const p_temp = document.querySelector('#p_temp');
const p_nivel = document.querySelector('#p_nivel');
const p_press = document.querySelector('#p_press');
const btn_texto = document.querySelector('#btn_texto');

const obterDados = () => {
    const endPoint = 'https://18239b10-db22-42a0-9641-e326c4bf1d08-00-17ug7bt54n9px.spock.replit.dev/';
    
    fetch(endPoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados);
        p_temp.innerHTML=`Temperatura: ${dados.temperatura}`;
        p_nivel.innerHTML=`Nível: ${dados.nivel}`;
        p_press.innerHTML=`Pressão: ${dados.pressao}`;
    });
};

// Chama a API a cada 3 segundos
// let intervalo = setInterval(obterDados, 3000);

let dados = {
    nome: 'Jardson',
    idade: 19,
    cidade: 'Currais Novos'
};

let cabecalho = {
    method: 'POST',
    body: JSON.stringify(dados)
};

const gravarDados = () => {
    const endPoint = '#';

    fetch(endPoint, cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret);
    });
};

btn_texto.addEventListener('click', (evt)=>{
    gravarDados();
});
const caixa1 = document.querySelector('#caixa1');
const btn_c=[...document.querySelectorAll('.curso')];

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'React Native'];

cursos.map((el, index) => {
    const newElement = document.createElement('div');
    newElement.setAttribute('id', `c${index+1}`);
    newElement.setAttribute('class', 'curso c1');
    newElement.innerHTML = el;

    const btn_lixeira = document.createElement('img');
    btn_lixeira.setAttribute('src', 'img/close.png');
    btn_lixeira.setAttribute('class', 'btn-lixeira');
    btn_lixeira.addEventListener('click', (evt) => {
        caixa1.removeChild(evt.target.parentNode);
    })
    
    newElement.appendChild(btn_lixeira);
    caixa1.appendChild(newElement);
})

console.log(caixa1.children);
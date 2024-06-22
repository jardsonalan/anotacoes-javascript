const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btn = document.querySelector('#btn-transferir');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target;
        // Adiciona ou remove (selecionado) da class / toggle
        curso.classList.toggle('selecionado');
    })
})


btn.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el);
        // Meu método
        el.addEventListener('click', (evt) => {
            const selectDelete = evt.target;
            selectDelete.classList.add('curso');
            caixa1.appendChild(el);
        })
    })
})

/*
// Método do professor
btn.addEventListener('click', () => {
    const cursosSelect = [...document.querySelectorAll('.selecionado')];
    const cursosNotSelect = [...document.querySelectorAll('.curso:not(.selecionado)')];

    cursosSelect.map((el) => {
        caixa2.appendChild(el);
    })

    cursosNotSelect.map((el) => {
        caixa1.appendChild(el);
    })
})
*/
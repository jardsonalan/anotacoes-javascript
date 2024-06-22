// stopPropagation - para a propagação dos eventos

const caixa1 = document.querySelector('#caixa1');
const btnC1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];

caixa1.addEventListener('click', (evt) => {
    console.log('clicou');
    console.log(evt.target);
})

// Em todos os elementos
cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation();
        // console.log('clicou');
    })
})

/*
// Apenas na div com (HTML)
btnC1.addEventListener('click', (evt) => {
    evt.stopPropagation();
    // console.log('clicou');
})
*/
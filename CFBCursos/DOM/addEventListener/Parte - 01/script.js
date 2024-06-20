// const c1 = document.querySelectorAll('#c1')[0];

const cursos = [...document.querySelectorAll('.curso')];

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target;
        el.classList.add('destaque');
        console.log(`${el.innerHTML} foi clicado`);
    })
})

// const msg = () => {
//     alert('clicou');
// }

// c1.addEventListener('click', msg);

/*
c1.addEventListener('click', () => {
    msg();
})
*/

/*
// Obtém o elemento que dispara o evento
c1.addEventListener('click', (evt) => {
    console.log(evt.target);
})
*/

// c1.addEventListener('click', (evt) => {
//     const el = evt.target;
//     el.classList.add('destaque');
// })
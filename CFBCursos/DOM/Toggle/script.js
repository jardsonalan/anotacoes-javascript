const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'React Native'];
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado');
const btnRemoverCurso = document.querySelector('#btnRemoverCurso');
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes');
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois');
const nomeCurso = document.querySelector('#nomeCurso');

let index = 0;

const tirarSelecao = () => {
    const cursoSelecionados = [...document.querySelectorAll('.selecionado')];
    cursoSelecionados.map((el) => {
        el.classList.remove('selecionado');
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', `c${index+1}`);
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao();
        evt.target.classList.toggle('selecionado');
    })

    return novoElemento;
}

cursos.map((el) => {
    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    index++;
});

const cursoSelecionado = () => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')];
    
    return cursoSelecionado[0];
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    try {
        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`);
    } catch (ex) {
        alert('Selecione um curso');
    }
});

btnRemoverCurso.addEventListener('click', (evt) => {
    const cs = cursoSelecionado();
    try {
        cs.remove();
    } catch (ex) {
        alert('Selecione um curso');
    }
});

btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    try {
        if (nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado());
        } else {
            alert('Digite o nome do curso');
        }
    } catch (ex) {
        alert('Selecione um curso');
    }
});

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
    try {
        if (nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
        } else {
            alert('Digite o nome do curso');
        }
    } catch (ex) {
        alert('Selecione um curso');
    }
});

// const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent;
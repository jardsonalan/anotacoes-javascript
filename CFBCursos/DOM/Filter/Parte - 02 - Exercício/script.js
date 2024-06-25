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

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', `c${index+1}`);
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML = curso;

    const comandos = document.createElement('div');
    comandos.setAttribute('class', 'comandos');

    const rb = document.createElement('input');
    rb.setAttribute('type', 'radio');
    rb.setAttribute('name', 'rb_curso');

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    return novoElemento;
}

cursos.map((el) => {
    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    index++;
});

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')];
    const radioSelecionado = todosRadios.filter((elem) => {
        return elem.checked;        
    })
    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = radioSelecionado();
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert(`Curso selecionado: ${cursoSelecionado}`);
    } catch (ex) {
        alert('Selecione um curso');
    }
});

btnRemoverCurso.addEventListener('click', (evt) => {
    const rs = radioSelecionado();
    try {
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove();
    } catch (ex) {
        alert('Selecione um curso');
    }
});

btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    const rs = radioSelecionado();
    try {
        if (nomeCurso.value != '') {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado);
        } else {
            alert('Digite o nome do curso');
        }
    } catch (ex) {
        alert('Selecione um curso');
    }
});

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
    const rs = radioSelecionado();
    try {
        if (nomeCurso.value != '') {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
        } else {
            alert('Digite o nome do curso');
        }
    } catch (ex) {
        alert('Selecione um curso');
    }
});

// const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent;
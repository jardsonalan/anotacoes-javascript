const cursos = ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C#']

// const getTodosCursos = ()=>{
//     return cursos
// }

export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos, getCurso} // Dentro das chaves na importação

// export default getTodosCursos // Fora das chaves na importação
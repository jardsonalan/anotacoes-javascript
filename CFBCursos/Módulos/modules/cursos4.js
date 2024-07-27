class Cursos{
    static cursos = ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C#']
    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso =(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCurso =()=>{
        this.cursos=[]
    }
}

export default Cursos
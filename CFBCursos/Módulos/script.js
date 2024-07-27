// Arquivo: cursos.js

// import { cursos } from "./modules/cursos.js"
// import { carros } from "./modules/cursos.js"

// console.log('Servidor Rodando')
// console.log(cursos)
// console.log(carros)

// ---------------------------------------------------------

// Arquivo: cursos2.js

// import getTodosCursos, { cursos, getCurso } from "./modules/cursos2.js";

// console.log(cursos)
// console.log(getTodosCursos())
// console.log(getCurso(0))

// ---------------------------------------------------------

// Arquivo: cursos3.js

// import getTodosCursos, { cursos as c, getCurso as gc } from "./modules/cursos2.js"; // Renomeia os módulos utilizando (as)
// import * as m_cursos from './modules/cursos3.js' // Pega tudo que está sendo exportado

// console.log(m_cursos.cursos)
// console.log(m_cursos.default()) // getTodosCursos
// console.log(m_cursos.getCurso(0))

// ---------------------------------------------------------

// Arquivo: cursos4.js

import c from "./modules/cursos4.js";

c.addCurso('Angular') // Adiciona um novo curso
c.apagarCurso() // Apaga todos os cursos
console.log(c.getTodosCursos()) // Mostra todos os cursos
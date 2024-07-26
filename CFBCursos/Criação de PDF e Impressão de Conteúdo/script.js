const btn_imp = document.querySelector('#btn_imp')

btn_imp.addEventListener('click', (evt)=>{
    const conteudo = document.querySelector('#tabela').innerHTML

    // Estilo da página de impressão
    let estilo = '<style>'
    estilo += 'table {width: 100%; font: 25px Arial;}'
    estilo += 'table, th, td {border: 2px solid #888; border-collapse: collapse; padding: 4px 8px; text-align: center;}'
    estilo += '</style>'

    const win = window.open('', '', 'height=700, width=700') // Nova Janela

    // Criação da nova página
    win.document.write('<html><head>')
    win.document.write('<title>CFB Cursos</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')

    win.print()
    win.close()

    // window.print() // Faz a impressão da tela
})
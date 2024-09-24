const ctx = document.getElementById('grafico1');

let labelsX=['Disponibilidade', 'Qualidade', 'Perfomance'];

let valores = [0, 0, 0];

  let grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsX,
      datasets: [{
        label: '# of Votes',
        data: valores,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const obterDados = () => {
    const endPoint = 'https://78e0bcda-3674-4c06-a867-c99eebc691cf-00-3i70w69gitqfg.kirk.replit.dev/';

    fetch(endPoint)
    .then(res=>res.json())
    .then(res=>{
        valores[0]=res.disponibilidade;
        valores[1]=res.qualidade;
        valores[2]=res.performance;
        
        grafico.update();
    })
    .catch(erro=>{
        console.log(`ERRO: ${erro}`);
    });
  };
  
  let intervaloGrafico = setInterval(obterDados, 3000);

// Chart.js
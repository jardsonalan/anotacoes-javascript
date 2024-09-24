const ctx = document.getElementById('grafico1');

let labelsX=['Brasil', 'EUA', 'Japão', 'México']

let valores = [10, 20, 30, 40]

  new Chart(ctx, {
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

// Chart.js
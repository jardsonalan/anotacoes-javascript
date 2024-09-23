let num = 10;
const curso = 'JavaScript';

// localStorage.setItem('numero', num); // Adiciona uma chave local
// alert(localStorage.key(0)); // Retorna uma chave específica
// alert(localStorage.length); // Retorna o tamanho do localStorage
// alert(localStorage.getItem('numero')); // Retorna a chave local
// alert(localStorage.getItem(localStorage.key(0)));
localStorage.clear(); // Limpa as chaves locais

// sessionStorage recebe as mesmas propriedades e métodos da localStorage
sessionStorage.setItem('nome', 'Alan');
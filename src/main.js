//* > Renderiza os cards e as infos deles na página principal.

import movies from "./data/movies/movies.json" assert { type: "json" }; // Importa o arquivo movies.json e armazena na variável movies.

// Criado uma função chamada criarCard que recebe um objeto movie como parâmetro.
function criarCard(movie) {
  // Retorna a estrutura HTML responsável por criar um card.
  return `
    <div class="card">
      <figure class="image">
        <div class="overlay">${movie.Plot}</div>
        <img src="${movie.Images[0]}" alt="${movie.Title}">
      </figure>

      <div class="content">
        <h1>${movie.Title}</h1>
        <p>${movie.Year}</p>
      </div>
    </div>
  `;
};

// Criado uma constante chamada cards que recebe um array de objetos.
const cards = [
  { 
    container: document.querySelector(".alta"),  // Seleciona o elemento HTML com a classe alta.
    startIndex: 0, // Define o índice inicial do array movies.
    endIndex: 4 }, // Define o índice final do array movies no caso 0, 1, 2 e 3.
  {
    container: document.querySelector(".lancamentos"), // Seleciona o elemento HTML com a classe lancamentos.
    startIndex: 4, // Define o índice inicial do array movies.
    endIndex: 8, // Define o índice final do array movies no caso 4, 5, 6 e 7.
  },
  {
    container: document.querySelector(".assista"), // Seleciona o elemento HTML com a classe assista.
    startIndex: 8, // Define o índice inicial do array movies.
    endIndex: 12, // Define o índice final do array movies no caso 8, 9, 10 e 11.
  },
  {
    container: document.querySelector(".talvez-goste"), // Seleciona o elemento HTML com a classe talvez-goste.
    startIndex: 12, // Define o índice inicial do array movies.
    endIndex: 16, // Define o índice final do array movies no caso 12, 13, 14 e 15.
  },
];

// Percorre o array cards e acessa e armazena os valores de cada objeto.
cards.forEach(({ container, startIndex, endIndex }) => {
  // O for tem três parâmetros já definidos, o primeiro é o índice inicial, o segundo é a condição de parada e o terceiro é o incremento.
  for (let i = startIndex; i < endIndex; i++) {
    const movie = movies[i]; // Armazena na variável movie o objeto movies na posição do indice i, assim ele armazena um objeto por vez.
    container.innerHTML += criarCard(movie); // Adiciona o card criado no container(ou seja dentro da section) do objeto atual.
  }
});

//* > Cuida da barra de pesquisa.

// Está puxando os elementos HTML do DOM para o JavaScript.
const inputPesquisa = document.querySelector(".formPesquisa input");
const buttonPesquisa = document.querySelector(".formPesquisa button");
const containerPesquisa = document.querySelector(".containerPesquisa");
const containerCards = document.querySelector(".containerCards");

function handleInput(event) {
  const inputValue = inputPesquisa.value.toLowerCase(); // Criado uma constante chamada inputValue que recebe o valor do input e transforma em letras minúsculas.
  
  containerCards.style.display = "none"; // Acessa o containerCards e altera o display para none, fazendo com que ele suma da tela.
  containerPesquisa.style.display = "grid"; // Acessa o containerPesquisa e altera o display para grid, fazendo com que ele apareça na tela.
  containerPesquisa.innerHTML = ""; // Acessa o containerPesquisa e altera o conteúdo para vazio.
  
  // Se o valor digitado no input for vazio, executa o if, se não, executa o else.
  if(inputValue === "") {
    containerCards.style.display = "grid"; // Acessa o containerCards e altera o display para grid, fazendo com que ele apareça na tela.
    containerPesquisa.style.display = "none"; // Acessa o containerPesquisa e altera o display para none, fazendo com que ele suma da tela.
  } else {
    event.preventDefault(); // Previne o comportamento padrão do botão.
  }

  // Criado uma constante chamada filterMovies, que usa o filter para filtrar os filmes.
  const filterMovies = movies.filter((movie) => {
    const title = movie.Title.toLowerCase(); // Criado uma constante chamada title que recebe o título do filme e transforma em letras minúsculas.
    return title.includes(inputValue); // Retorna o filme que inclui o valor do input.
  })
  
  // O forEach passa por cada filme filtrado e armazena no parâmetro movie.
  filterMovies.forEach((movie) => {
    containerPesquisa.innerHTML += criarCard(movie); // Cria um card para cada filme passando como parâmetro o filme atual e adiciona no containerPesquisa.
  })

  // Se o conteúdo do containerPesquisa estiver vazio, executa o if.
  if(containerPesquisa.innerHTML === "") {
    containerPesquisa.style.display = "flex"; // Acessa o containerPesquisa e altera o display para flex, tirando o display grid.
    // Acessa o containerPesquisa e altera o conteúdo para a estrutura HTML abaixo.
    containerPesquisa.innerHTML = `
      <div class="notFound">
        <h1>Oops... Infelizmente nenhum filme com esse nome foi encontrado.</h1>
      </div>
    `;
  }
}

buttonPesquisa.addEventListener("click", handleInput); // Adiciona um evento de click no botão e chama a função handleInput.
inputPesquisa.addEventListener("input", handleInput) // Adiciona um evento de input no input e chama a função handleInput.
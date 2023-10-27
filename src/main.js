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

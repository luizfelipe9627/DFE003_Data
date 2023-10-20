import movies from "./data/movies/movies.json" assert { type: "json" };

function criarCard(movie) {
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

const cards = [
  { container: document.querySelector(".alta"), startIndex: 0, endIndex: 4 },
  {
    container: document.querySelector(".lancamentos"),
    startIndex: 4,
    endIndex: 8,
  },
  {
    container: document.querySelector(".assista"),
    startIndex: 8,
    endIndex: 12,
  },
  {
    container: document.querySelector(".talvez-goste"),
    startIndex: 12,
    endIndex: 16,
  },
];

cards.forEach(({ container, startIndex, endIndex }) => {
  for (let i = startIndex; i < endIndex; i++) {
    const movie = movies[i];
    container.innerHTML += criarCard(movie);
  }
});

// 1. Importar o arquivo JSON, chamar do HTML o container e estruturar o forEach.
import movies from "./data/movies/movies.json" assert { type: "json" };

const section = document.querySelector(".container");

movies.forEach((movie) => {
    // 2. Criar os elementos HTML através do DOM utilizando JavaScript.
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("div");
    image.classList.add("image");
    const content = document.createElement("div");
    content.classList.add("content");
    
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");

    // 3. Colocar o texto e a img do JSON nos elementos criados.
    h1.innerHTML = movie.Title;
    p.innerHTML = movie.Plot;
    img.src = movie.Images[0];
    img.alt = movie.Title;

    // 4. Colocar os elementos criados dentro dos seus devidos pais(divs).
    section.appendChild(card);
    card.appendChild(image);
    card.appendChild(content);

    image.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
    
});      
console.log(section)






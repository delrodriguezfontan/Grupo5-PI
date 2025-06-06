let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let buscar = queryObj.get("buscar");
let series = queryObj.get("series");
let peliculas = queryObj.get("movies");


let oculto = document.querySelector(".oculto");
let encontrado = document.querySelector(".encontrado");
let texto = document.querySelector(".textofound")
let cargando = document.querySelector(".cargando");

console.log(buscar);


if (peliculas) {
    
    let urlp = `https://api.themoviedb.org/3/search/movie?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&query=${buscar}`;

    fetch(urlp)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let info = data.results;
            let allCharacters = "";
            if (info.length === 0) {
                oculto.style.display = "block";
                encontrado.style.display = "none";
            } else {
                texto.innerText = `Peliculas encontradas para: ${buscar}`
                for (let i = 0; i < info.length; i++) {
                    const element = info[i];
                    allCharacters += 
                    `<article class="articulo">
                        <a href="./detail-movie.html?id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
                            <h3 class="titulos">${element.title}</h3>
                            <p class="fecha">(${element.release_date})</p>
                        </a>
                    </article>`;
                }
                encontrado.innerHTML = allCharacters;
                oculto.style.display = "none";
                encontrado.style.display = "flex";
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
} else if (series) {
    let urls = `https://api.themoviedb.org/3/search/tv?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&query=${buscar}`;
        fetch(urls)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let info = data.results;
            let allCharacters = "";
            if (info.length === 0) {
                oculto.style.display = "block";
                encontrado.style.display = "none";
            } else {
                texto.innerText = `Series encontradas para: ${buscar}`;
                for (let i = 0; i < info.length; i++) {
                    const element = info[i];
                    allCharacters += `
                    <article class="articulo">
                        <a href="./detail-serie.html?id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.name}" class="img">
                            <h3 class="titulos">${element.name}</h3>
                            <p class="fecha">(${element.first_air_date})</p>
                        </a>
                    </article>`;
                }
                encontrado.innerHTML = allCharacters;
                oculto.style.display = "none";
                encontrado.style.display = "flex";
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
} else {
    oculto.style.display = "block";
    encontrado.style.display = "none";
    cargando.style.display = "none";
}
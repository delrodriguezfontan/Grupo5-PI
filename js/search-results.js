let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let buscar = queryObj.get("buscar");
let serie = queryObj.get("serie");
let peliculas = queryObj.get("peliculas");

let oculto = document.querySelector(".oculto");
let encontrado = document.querySelector(".encontrado");

console.log(buscar);

let urls = `https://api.themoviedb.org/3/search/tv?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&query=${buscar}`;
let urlp = `https://api.themoviedb.org/3/search/movie?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&query=${buscar}`;

if () {
    fetch(urls)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let info = data.results;
            let allCharacters = "";
            if (info.length === 0) {
                oculto.style.display = "block";
                encontrado.innerHTML = "";
                encontrado.style.display = "none";
            } else {
                allCharacters += "<h2>Series encontradas:</h2><br>";
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
} else if () {
    fetch(urlp)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let info = data.results;
            let allCharacters = "";
            if (info.length === 0) {
                oculto.style.display = "block";
                encontrado.innerHTML = "";
                encontrado.style.display = "none";
            } else {
                allCharacters += "<h2>Películas encontradas:</h2><br>";
                for (let i = 0; i < info.length; i++) {
                    const element = info[i];
                    allCharacters += `
                    <article class="articulo">
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
} else {
    encontrado.innerHTML = "<img src='./img/error.png' alt='error' class='error'>";
}

let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");
let nombreGenero = queryObj.get("nombreGenero");
let tipo = queryObj.get("tipo");

let titulo = document.querySelector(".titulogenero");
let cuerpo = document.querySelector(".cuerpo");

titulo.innerText = nombreGenero;


let url = `https://api.themoviedb.org/3/discover/${tipo}?with_genres=${id}&api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`;
// hice el if poruqe el valor del titulo de la pelicula y la serie es diferente en cada una de sus apis
fetch(url)
    .then(function (params) {
        return params.json();
    })
    .then(function (data) {
        console.log(data);

        let info = data.results
        let contenido = "";
if (tipo === "movie") {
            for (let i = 0; i < info.length; i++) {
            const element = info[i];
            contenido += `<a href="./detail-${tipo}.html?id=${element.id}"><article class="articulo">
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
            <h1>${element.title}</h1>
            </article></a>`;
            console.log(data);
        }
        } else {
            for (let i = 0; i < info.length; i++) {
            const element = info[i];
            contenido += `<a href="./detail-${tipo}.html?id=${element.id}"><article class="articulo">
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
            <h1>${element.name}</h1>
            </article></a>`;
            console.log(data);
        }
        }
        cuerpo.innerHTML = contenido
    })
    .catch(function (params) {
        console.log(params);
        return params;
    })






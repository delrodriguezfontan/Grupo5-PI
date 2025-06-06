let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");

let url = "https://api.themoviedb.org/3/tv/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c"; 

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let selector = document.querySelector(".detalles");
    selector.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}" class="imgdetalles">
    <h1>${data.name}</h1>
            <ul>
                <li>Calificación: ${data.popularity}</li>
                <li>Fecha de estreno: ${data.first_air_date}</li>
                <li>Calificación: ${data.vote_average} min</li>
                <li>Sinopsis: ${data.overview}</li>
                <li>Géneros: ${data.genres.name}</li>!!
            </ul>
    `;  // PREGUNTARR GENEROS //
    console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
})
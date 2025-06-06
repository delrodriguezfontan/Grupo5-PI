let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");


let url = `https://api.themoviedb.org/3/tv/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`; 

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  let selector = document.querySelector(".detalles");
  let generos = "";
    console.log(data.genres);
    
    for (let i = 0; i < data.genres.length; i++) {
        const element = data.genres[i];
        console.log(element.name);
        generos+= `<a href="./detail-genres.html?id=${element.id}&nombreGenero=${element.name}&tipo=tv"> ${element.name} </a>`
        
    }
    selector.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}" class="imgdetalles">
    <h1>${data.name}</h1>
            <ul>
                <li>Calificación: ${data.popularity}</li>
                <li>Fecha de estreno: ${data.first_air_date}</li>
                <li>Sinopsis: ${data.overview}</li>
                <li>Géneros: ${generos}</li>
            </ul>
    `;
    console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
})

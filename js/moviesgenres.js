let queryString = location.search;
let queryObjeto = new URLSearchParams(queryString);
let getName = queryObjeto.get("name");


let apiKey = "https://api.themoviedb.org/3/genre/movie/list?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";

fetch(apiKey)
.then(function(response) {
    return response.json()
  })
  .then(function(data){let container = document.querySelector(".listado");
    let genres = data.genres; 

    for (let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        container.innerHTML += `<a href="moviegenres.html?id=${genre.id}&name=${genre.name}</a>`;

    }})
    .catch(function(error) {
        console.log("Error: " + error);
      })
    
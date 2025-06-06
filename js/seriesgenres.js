let queryString = location.search;
let queryObjeto = new URLSearchParams(queryString);
let getName = queryObjeto.get("name");

let api = "https://api.themoviedb.org/3/genre/tv/list?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";

fetch(api)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
    let container34 = document.querySelector(".listado");
    let genres = data.genres; 

    for (let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        container34.innerHTML += `<a href="genre-detail.html?id=${genre.id}&name=${genre.name}</a>`;
  }
  console.log(data)

let api = "https://api.themoviedb.org/3/genre/tv/list?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";

fetch(apiKey)
.then(function(response) {
    return response.json()
  })
  .then(function(data){let container = document.querySelector(".listado");
    let genres = data.genres; 

    for (let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        container.innerHTML +=
        

    }})
    .catch(function(error) {
        console.log("Error: " + error);
      })
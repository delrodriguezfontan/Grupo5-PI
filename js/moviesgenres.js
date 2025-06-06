let detalles = document.querySelector(".generos")
let lista = document.querySelector (".listado")

let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";
fetch(url)
.then (function (response) {
    return response.json(); 
  })
.then (function (data) {
   let info = data.genres
  console.log(info);
  for (let i = 0; i < info.length; i++) {
    const element = info[i];
    console.log(element)
    lista.innerHTML += `
        <li class=g><a href="./detail-genres.html?id=${element.id}&nombreGenero=${element.name}&tipo=movie">${element.name}</li></a>`
    
  }
  })
  .catch(function(error) {
  console.log("Error: " + error);
})


// llamar a las selectores//
let cuerpop = document.querySelector('.peliculas');
let cuerpos = document.querySelector('.series');
let cuerpon = document.querySelector('.nuevo');
// cambiar los textos de la pagina principal de peliculas populares//

let url1 = "https://api.themoviedb.org/3/movie/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";
fetch(url1)
.then (function (response) {
    return response.json(); 
  })
.then (function (data) {
   let info = data.results
  console.log(info);
  for (let i = 0; i < 5 ; i++) {
    const element = info[i];
    cuerpop.innerHTML +=
    `<article class="articulo">
        <a href="./detail-movie.html?id=${element.id}"><img src= "https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
        <h3 class="titulos">${element.title}</h3>
        <p class="fecha">(${element.release_date})</p></a>
    </article>`
  }
  })
  .catch(function(error) {
  console.log("Error: " + error);
})
// cambiar los textos de la pagina principal de series populares//

let url2 = "https://api.themoviedb.org/3/tv/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";
fetch(url2)
.then (function (response) {
    return response.json(); 
  })
  .then (function (data) {
   let info = data.results
  console.log(info);
  for (let i = 0; i < 5 ; i++) {
    const element = info[i];
    cuerpos.innerHTML +=
    ` 
    <article class="articulo">
        <a href="./detail-tv.html?id=${element.id}"><img src= "https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.name}" class="img">
        <h3 class="titulos">${element.name}</h3>
        <p class="fecha">(${element.first_air_date})</p></a>
    </article>`
  }
  })
  .catch(function(error) {
  console.log("Error: " + error);
})


// cambiar los textos de la pagina principal de lo nuevo de peliculas//
let url3 = "https://api.themoviedb.org/3/movie/upcoming?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";
fetch(url3)
.then (function (response) {
    return response.json(); 
  })
.then (function (data) {
   let info = data.results
  console.log(info);
  for (let i = 5; i < 10 ; i++) {
    const element = info[i];
    cuerpon.innerHTML +=
    `<article class="articulo">
        <a href="./detail-movie.html?id=${element.id}"><img src= "https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
        <h3 class="titulos">${element.title}</h3>
        <p class="fecha">(${element.release_date})</p></a>
    </article>`
  }
  })
  .catch(function(error) {
  console.log("Error: " + error);
})
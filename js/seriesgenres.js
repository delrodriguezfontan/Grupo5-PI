
let selector = document.querySelector(".listado")

let api = "https://api.themoviedb.org/3/genre/tv/list?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";

fetch(api)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
    let genres = data.genres; 

    console.log(genres)
    
    for (let i = 0; i < genres.length; i++) {
        const element = genres[i];
        console.log(element);
        
        selector.innerHTML +=
        `<ul class="listado"> <a href="./detail-genres.html?id=${element.id}"
        <li class="s"> ${element.name} </li></a> `

    }
})
.catch(function (error) {
    console.log("Error: " + error);
});


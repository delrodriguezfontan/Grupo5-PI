

let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c";
fetch(url)
.then (function (response) {
    return response.json(); 
  })
.then (function (data) {
   let info = data.results
  console.log(info);
  for (let i = 0; i < 5 ; i++) {
    const element = info[i];
    cuerpop.innerHTML +=
  }
  })
  .catch(function(error) {
  console.log("Error: " + error);
})
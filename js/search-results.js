

let queryString = location.search;
console.log(queryString);
let queryObj = new URLSearchParams(queryString);
let buscar = queryObj.get("Buscar");
let oculto = document.querySelector(".oculto");
let encontrado = document.querySelector(".cuerpo");

console.log(buscar);
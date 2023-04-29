//variables globales
let inputSearch = document.getElementById('inputBuscador')
let btnBuscador = document.getElementById('btnBuscarArticulo')
let formularioBuscador = document.getElementById('formBuscador')

formularioBuscador.addEventListener('submit', buscarArticulo);

function buscarArticulo(e){
    e.preventDefault();
    console.log(inputSearch.value)
    formularioBuscador.reset();
}
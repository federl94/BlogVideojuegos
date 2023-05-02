//variables globales
let inputSearch = document.getElementById('inputBuscador')
let btnBuscador = document.getElementById('btnBuscarArticulo')
let formularioBuscador = document.getElementById('formBuscador')
let contenedorArticulo = document.getElementById('contenedorArticulos')
//manejador de eventos
formularioBuscador.addEventListener('submit', buscarArticulo);

function buscarArticulo(e) {
    e.preventDefault();
    const inputBuscador = document.querySelector('#inputBuscador');
    const textoBusqueda = inputBuscador.value.trim().toLowerCase();
    let parrafo = document.createElement("p");
    const articulos = document.querySelectorAll('#contenedorArticulos .card-title');
    articulos.forEach(articulo => {
      const tituloArticulo = articulo.textContent.trim().toLowerCase();
      const cardArticulo = articulo.closest('#cardArticulo');
  
      if (tituloArticulo.includes(textoBusqueda)) {
        cardArticulo.classList.remove('d-none');        
      } else {
        cardArticulo.classList.add('d-none');
        parrafo.innerHTML='No se encontró el artículo que buscas'
      }
    });
  }
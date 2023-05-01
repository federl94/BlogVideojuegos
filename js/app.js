//variables globales
let inputSearch = document.getElementById('inputBuscador')
let btnBuscador = document.getElementById('btnBuscarArticulo')
let formularioBuscador = document.getElementById('formBuscador')
let contenedorArticulo = document.getElementById('contenedorArticulos')

formularioBuscador.addEventListener('submit', buscarArticulo);

function buscarArticulo(e) {
    e.preventDefault();
    const inputBuscador = document.querySelector('#inputBuscador');
    const textoBusqueda = inputBuscador.value.trim().toLowerCase();
  
    const articulos = document.querySelectorAll('#contenedorArticulos .card-title');
    articulos.forEach(articulo => {
      const tituloArticulo = articulo.textContent.trim().toLowerCase();
      const cardArticulo = articulo.closest('#cardArticulo');
  
      if (tituloArticulo.includes(textoBusqueda)) {
        cardArticulo.classList.remove('d-none');
      } else {
        cardArticulo.classList.add('d-none');
      }
    });
  }
  
//variables globales
let inputSearch = document.getElementById('inputBuscador')
let btnBuscador = document.getElementById('btnBuscarArticulo')
let formularioBuscador = document.getElementById('formBuscador')
let contenedorArticulo = document.getElementById('contenedorArticulos')
let mensajeBusqueda = document.createElement('p');
mensajeBusqueda.innerHTML = "No se encontró el artículo que buscas";
mensajeBusqueda.classList.add("d-none");
contenedorArticulo.appendChild(mensajeBusqueda);

//manejador de eventos
inputSearch.addEventListener('input', buscarArticulo);

function buscarArticulo() {
  realizarBusqueda();
}

function realizarBusqueda() {
  const inputBuscador = document.querySelector('#inputBuscador');
  const textoBusqueda = inputBuscador.value.trim().toLowerCase();
  let encontrados = false;
  const articulos = document.querySelectorAll('#contenedorArticulos .card-title');
  articulos.forEach(articulo => {
      const tituloArticulo = articulo.textContent.trim().toLowerCase();
      const cardArticulo = articulo.closest('#cardArticulo');
      if (tituloArticulo.includes(textoBusqueda)) {
          cardArticulo.classList.remove('d-none');
          encontrados = true;
      } else {
          cardArticulo.classList.add('d-none');        
      }
  });
  if (!encontrados) {
      mensajeBusqueda.classList.remove("d-none");
  } else {
      mensajeBusqueda.classList.add("d-none");
  }
}

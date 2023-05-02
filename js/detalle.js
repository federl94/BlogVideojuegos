let inputNombre = document.getElementById('inputNombre');
let inputDescripcion = document.getElementById('inputDescripcion');
let btnEnviar = document.getElementById('formularioJuegos');
let etiquetaPadre = document.querySelector('#articlePadre');
btnEnviar.addEventListener('submit',agregarComentario);
let fecha = new Date();

function agregarComentario(e){
    e.preventDefault();
    console.log('HOLA');
    let elemento = document.createElement('div');
    let nombre = document.createElement('strong');
    let fechaComentario = document.createElement('small');
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    mes++;
    dia = dia < 10 ? `0${dia}` : dia;
    mes = mes < 10 ? `0${mes}` : mes;
    fechaComentario.innerHTML = `<br>${dia}/${mes}/${anio}`;
    nombre.innerHTML =  inputNombre.value;
    nombre.className = 'pt-3 text-decoration-underline fs-5';
    elemento.appendChild(nombre);
    elemento.appendChild(fechaComentario);
    let parrafo = document.createElement('p');
    parrafo.innerHTML = inputDescripcion.value;
    parrafo.className = 'text-start';
    elemento.appendChild(parrafo);
    etiquetaPadre.appendChild(elemento);
}


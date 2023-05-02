//variable modalPublicidad

let modalPublicidad = new bootstrap.Modal(
  document.getElementById("modalPublicidad")
);

// variable para cerrar la ventana modal
let cerrar = document.querySelectorAll(".cerrar")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".modalContainer")[0];

// funcion para quitar ventana modal
cerrar.addEventListener("click", function () {
  modal.classList.toggle("cerrarModal");
});

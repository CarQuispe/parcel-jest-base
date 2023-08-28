import Calcular from "./totalizador";


const cantidad = document.querySelector("#cantidad-input");
const estadoSelect = document.querySelector("#estado-select");
const form = document.getElementById("totalizador-form");
const resultadoDiv = document.getElementById("resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cant = parseInt(cantidad.value);

  if (!isNaN(cant)) {
    resultadoDiv.innerHTML = "<p>Cantidad ingresada: " + cant + "</p>";
  } else {
    resultadoDiv.innerHTML = "<p>Por favor, ingresa una cantidad válida</p>";
  }
});
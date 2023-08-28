import Calcular from "./totalizador";

const precioInput = document.querySelector("#precio-input");
const estadoSelect = document.querySelector("#estado-select"); // Seleccionar el select del estado

const form = document.getElementById("totalizador-form");
const resultadoDiv = document.getElementById("resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const precio = parseFloat(precioInput.value);
  const estadoSeleccionado = estadoSelect.value; 
  
  if (!isNaN(precio)) {
    resultadoDiv.innerHTML = "<p>Precio ingresado: $" + precio.toFixed(2) + "</p>";
    
    if (estadoSeleccionado) {
      resultadoDiv.innerHTML += "<p>Estado seleccionado: " + estadoSeleccionado + "</p>"; 
    } else {
      resultadoDiv.innerHTML += "<p>Por favor, selecciona un estado</p>";
    }
  } else {
    resultadoDiv.innerHTML = "<p>Por favor, ingresa un precio válido</p>";
  }
});



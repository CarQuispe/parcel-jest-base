import Calcular from "./totalizador";

const precioInput = document.querySelector("#precio-input"); 

const form = document.getElementById("totalizador-form");
const resultadoDiv = document.getElementById("resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const precio = parseFloat(precioInput.value); 
  
  if (!isNaN(precio)) {
    resultadoDiv.innerHTML = "<p>Precio ingresado: $" + precio.toFixed(2) + "</p>"; 
  } else {
    resultadoDiv.innerHTML = "<p>Por favor, ingresa un precio válido</p>";
  }
});


import Calcular from "./totalizador";

const precioInput = document.querySelector("#precio-input");
const estadoSelect = document.querySelector("#estado--select"); 
const form = document.getElementById("totalizador-form");
const resultadoDiv = document.getElementById("resultado-div");

const impuestosPorEstado = {
  "6.65": "UT",
  "8": "NV",
  "6.25": "TX",
  "4": "AL",
  "8.25": "CA"
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const precio = parseFloat(precioInput.value);
  const estadoSeleccionado = estadoSelect.value;
  
  if (!isNaN(precio)) {
    resultadoDiv.innerHTML = "<p>Precio ingresado: $" + precio.toFixed(2) + "</p>";
    
    if (estadoSeleccionado) {
      const impuesto = impuestosPorEstado[estadoSeleccionado];
      resultadoDiv.innerHTML += "<p>Estado seleccionado: " + impuesto + " - Impuesto: " + estadoSeleccionado + "%</p>";
    } else {
      resultadoDiv.innerHTML += "<p>Por favor, selecciona un estado</p>";
    }
  } else {
    resultadoDiv.innerHTML = "<p>Por favor, ingresa un precio válido</p>";
  }
});



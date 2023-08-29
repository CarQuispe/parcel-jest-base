import Calcular from "./totalizador";

const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estadoSelect = document.querySelector("#estado--select");
const form = document.querySelector("#totalizador-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseInt(precio.value);
  const estado = estadoSelect.value;
  const total = Calcular(cant,prec,parseFloat(estado))
  resultadoDiv.innerHTML = "<p>Cantidad:  " + cant + "</p>" + "<p> Precio:  "+ prec+"</p>"
  + "<p> Tasa de impuesto:  "+ estado+"</p>" + "<p> Precio Neto:  "+ total+"</p>";
});


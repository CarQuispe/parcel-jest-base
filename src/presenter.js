import esBisiesto from "./esBisiesto";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
 

  div.innerHTML = "<p>" + esBisiesto(firstNumber) + "</p>";
});
esBisiesto(anio)
import saludar from "./saludador.js";

const botForm = document.getElementById("bot-form");
const idiomaDiv = document.getElementById("idioma-div");
const saludoDiv = document.getElementById("saludo-div");
const generoDiv = document.getElementById("genero-div");
const edadDiv = document.getElementById("edad-div");  
const generoButton = document.getElementById("genero-button");
const edadButton = document.getElementById("edad-button");  
const idiomaButton = document.getElementById("idioma-button");
const idiomaSelect = document.getElementById("idioma");
let genero = "";

botForm.addEventListener("submit", handleFormSubmit);
idiomaButton.addEventListener("click", handleIdiomaButtonClick);
generoButton.addEventListener("click", handleGeneroButtonClick);
edadButton.addEventListener("click", handleEdadButtonClick);

function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const saludo = saludar(nameInput);
  saludoDiv.innerHTML = saludo;
  idiomaDiv.style.display = "block";
}

function handleIdiomaButtonClick() {
  idiomaDiv.style.display = "none";
  generoDiv.style.display = "block";
}

function handleGeneroButtonClick() {
  const selectedGenero = document.querySelector('input[name="genero"]:checked');
  if (selectedGenero) {
    genero = selectedGenero.value;
    generoDiv.style.display = "none";
    edadDiv.style.display = "block";
  }
}

function handleEdadButtonClick() {
  const edadInput = parseInt(document.getElementById("edad").value);
  const name = document.getElementById("name").value;
  const generoSaludo = getGeneroSaludo(genero, edadInput);
  const saludoHora = getSaludoHora();
  const selectedIdioma = idiomaSelect.value;

  if (selectedIdioma === "es") {
    mostrarSaludoCompleto(saludoHora, generoSaludo, name);
  } else if (selectedIdioma === "en") {
    mostrarSaludoIngles();
  }
}




function mostrarSaludoIngles() {
  saludoDiv.innerHTML = "Hello"; // Muestra "Hello" en lugar del saludo completo
  edadDiv.style.display = "none";
}





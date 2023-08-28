import saludar from "./saludador.js";
const botForm = document.getElementById("bot-form");


botForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const saludo = saludar(nameInput);
  saludoDiv.innerHTML = saludo;
  idiomaDiv.style.display = "block";
});




const form = document.querySelector("[data-form]");
const namesInput = document.querySelector("[data-names-input]");
const lastnamesInput = document.querySelector("[data-lastnames-input]");
const telephoneInput = document.querySelector("[data-telephone-input]");
const subjectInput = document.querySelector("[data-subject-input]");
const messageInput = document.querySelector("[data-message-input]");

form.addEventListener("input", (e) => {
  clearErrorFor(e.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  namesInput.focus();

  const names = namesInput.value;
  const lastnames = lastnamesInput.value;
  const telephone = telephoneInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  let error = false;
  let textError = "Falta completar los siguientes campos:";

  if (names.trim().length === 0) {
    textError += "\n\t Nombres";
    error = true;
    setErrorFor(namesInput);
  }
  if (lastnames.trim().length === 0) {
    textError += "\n\t Apellidos";
    error = true;
    setErrorFor(lastnamesInput);
  }
  if (telephone.trim().length === 0) {
    textError += "\n\t Teléfono";
    error = true;
    setErrorFor(telephoneInput);
  }
  if (subject.trim().length === 0) {
    textError += "\n\t Asunto";
    error = true;
    setErrorFor(subjectInput);
  }
  if (message.trim().length === 0) {
    textError += "\n\t Mensaje";
    error = true;
    setErrorFor(messageInput);
  }

  if (error) {
    alert(textError);
    return;
  }

  alert("Mensaje enviado");

  namesInput.value = "";
  lastnamesInput.value = "";
  telephoneInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
});

function setErrorFor(element) {
  element.classList.add("error");
}
function clearErrorFor(element) {
  element.classList.remove("error");
}
function clearAllErrors() {}

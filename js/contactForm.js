const form = document.querySelector("[data-form]");
const namesInput = document.querySelector("[data-names-input]");
const lastnamesInput = document.querySelector("[data-lastnames-input]");
const telephoneInput = document.querySelector("[data-telephone-input]");
const subjectInput = document.querySelector("[data-subject-input]");
const messageInput = document.querySelector("[data-message-input]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  namesInput.focus();

  const names = namesInput.value;
  const lastnames = lastnamesInput.value;
  const telephone = telephoneInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  if (names.trim().length === 0) {
    return;
  }
  if (lastnames.trim().length === 0) {
    return;
  }
  if (telephone.trim().length === 0) {
    return;
  }
  if (subject.trim().length === 0) {
    return;
  }
  if (message.trim().length === 0) {
    return;
  }

  alert("Mensaje enviado");

  namesInput.value = "";
  lastnamesInput.value = "";
  telephoneInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
});

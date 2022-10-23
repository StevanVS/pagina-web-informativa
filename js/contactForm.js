const form = document.querySelector("[data-form]");
const namesInput = form.names;
const lastnamesInput = form.lastnames;
const telephoneInput = form.telephone;
const subjectInput = form.subject;
const messageInput = form.message;

form.addEventListener("submit", (e) => {
  e.preventDefault();

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

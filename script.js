
function chooseTemplate(templateName) {
  const message = document.getElementById("message");

  if (!message) {
    return;
  }

  message.textContent =
    "💜 " + templateName +
    " selected! Your personalized website creator is coming soon.";

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

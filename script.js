let selectedTemplate = "";

function chooseTemplate(templateName) {
  selectedTemplate = templateName;

  const heading = document.getElementById("selectedTemplate");
  const creator = document.getElementById("creator");

  heading.textContent = "Selected: " + templateName + " 💜";

  creator.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

document.getElementById("customForm").addEventListener("submit", function (event) {
event.preventDefault();

  if (!selectedTemplate) {
    alert("Please choose an occasion first! 💜");
    return;
  }

  const recipient = document.getElementById("recipient").value.trim();
  const message = document.getElementById("message").value.trim();
  const photoInput = document.getElementById("photo");

  document.getElementById("previewTitle").textContent = selectedTemplate;
  document.getElementById("previewName").textContent = "For " + recipient;
  document.getElementById("previewMessage").textContent = message;

  const previewPhoto = document.getElementById("previewPhoto");
  const preview = document.getElementById("preview");

  if (photoInput.files && photoInput.files[0]) {
    const file = photoInput.files[0];

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      previewPhoto.src = reader.result;
      previewPhoto.hidden = false;
      preview.hidden = false;

      preview.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    reader.readAsDataURL(file);
  } else {
    previewPhoto.hidden = true;
    previewPhoto.removeAttribute("src");
    preview.hidden = false;

    preview.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});
});

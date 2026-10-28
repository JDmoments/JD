let selectedTemplate = "";

function chooseTemplate(templateName) {
  selectedTemplate = templateName;

  document.getElementById("selectedTemplate").textContent =
    "Selected: " + templateName + " 💜";

  document.getElementById("creator").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("customForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!selectedTemplate) {
      alert("First, choose Birthday, Love Proposal, or Anniversary!");
      return;
    }

    const recipient = document.getElementById("recipient").value.trim();
    const message = document.getElementById("message").value.trim();
    const photoInput = document.getElementById("photo");

    const preview = document.getElementById("preview");
    const previewPhoto = document.getElementById("previewPhoto");

    document.getElementById("previewTitle").textContent = selectedTemplate;
    document.getElementById("previewName").textContent = "For " + recipient;
    document.getElementById("previewMessage").textContent = message;

    function showPreview() {
      preview.hidden = false;

      setTimeout(function () {
        preview.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }

    if (photoInput.files && photoInput.files.length > 0) {
      const file = photoInput.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      const reader = new FileReader();

      reader.onload = function () {
        previewPhoto.src = reader.result;
        previewPhoto.hidden = false;
        showPreview();
      };

      reader.onerror = function () {
        alert("Photo could not be loaded. Please try another photo.");
      };

      reader.readAsDataURL(file);
    } else {
      previewPhoto.hidden = true;
      previewPhoto.removeAttribute("src");
      showPreview();
    }
  });
});

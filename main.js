var newsletterBox = document.getElementById("newsletterBox");
var confirmationBox = document.getElementById("confirmationBox");
var submitBtn = document.getElementById("submitBtn");
var dismissBtn = document.getElementById("dismissBtn");
var emailInput = document.getElementById("emailInput");
var emailError = document.getElementById("emailError");
var newsletterForm = document.getElementById("newsletterForm");
var emailSent = document.getElementById("emailsent");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!isValidEmail(emailInput.value)) {
    emailError.classList.remove("hidden");
    return;
  }

  emailError.classList.add("hidden");

  newsletterBox.classList.add("hidden");
  confirmationBox.classList.remove("hidden");

  emailSent.textContent = emailInput.value;
});

dismissBtn.addEventListener("click", function () {
  confirmationBox.classList.add("hidden");
  newsletterBox.classList.remove("hidden");

  emailInput.value = "";
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

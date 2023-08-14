document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.getElementById("singupLink");
  const loginLink = document.getElementById("loginLink");
  const signupBox = document.querySelector(".signup-box");
  const loginBox = document.querySelector(".login-box");

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupBox.style.display = "block";
    loginBox.style.display = "none";
  });

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupBox.style.display = "none";
    loginBox.style.display = "block";
  });
});

function redirectToLandingPage() {
  window.location.href = "../Landing Page/index.html";
  return false;
}

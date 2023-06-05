//Drum sounds
let bombo, crash, hihat, redob, tom1, tom2, tom3, tom4;

//Keyboard sounds
let do1, do2, re1, re2, mi1, mi2, fa1, fa2, sol1, sol2, la1, la2, si1, si2;

//cargamos los sonidos
function preloadDrum() {
  bombo = loadSound("/resources/drumSounds/bombo.wav");
  crash = loadSound("/resources/drumSounds/crash.wav");
  hihat = loadSound("/resources/drumSounds/hit-hat.wav");
  redob = loadSound("/resources/drumSounds/redoblante.wav");
  tom1 = loadSound("/resources/drumSounds/tom1.wav");
  tom2 = loadSound("/resources/drumSounds/tom2.wav");
  tom3 = loadSound("/resources/drumSounds/tom3.wav");
  tom4 = loadSound("/resources/drumSounds/tom4.wav");
}

function preloadKeyboard() {
  do1 = loadSound("/resources/keyboardSounds/do.ogg");
  do2 = loadSound("/resources/keyboardSounds/do2.ogg");
  re1 = loadSound("/resources/keyboardSounds/re.ogg");
  re2 = loadSound("/resources/keyboardSounds/re2.ogg");
  mi1 = loadSound("/resources/keyboardSounds/mi.ogg");
  mi2 = loadSound("/resources/keyboardSounds/mi2.ogg");
  fa1 = loadSound("/resources/keyboardSounds/fa.ogg");
  fa2 = loadSound("/resources/keyboardSounds/fa2.ogg");
  sol1 = loadSound("/resources/keyboardSounds/sol.ogg");
  sol2 = loadSound("/resources/keyboardSounds/sol2.ogg");
  la1 = loadSound("/resources/keyboardSounds/la.ogg");
  la2 = loadSound("/resources/keyboardSounds/la2.ogg");
  si1 = loadSound("/resources/keyboardSounds/si.ogg");
  si2 = loadSound("/resources/keyboardSounds/si2.ogg");
}
// -------------- Sign Up and Login -----------------
document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  const loginButton = document.getElementById("loginButton");

  if (registerButton) {
    registerButton.addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      clearErrorMessages();

      let errorMessage = "";

      switch (true) {
        case username.trim() === "":
          errorMessage = "Username is required.";
          highlightField("username");
          break;
        case email.trim() === "":
          errorMessage = "Email is required.";
          highlightField("email");
          break;
        case password.trim() === "":
          errorMessage = "Password is required.";
          highlightField("password");
          break;
        case confirmPassword.trim() === "":
          errorMessage = "Confirm Password is required.";
          highlightField("confirmPassword");
          break;
        case password.length < 5:
          errorMessage =
            "Password is too short. Please enter at least 5 characters.";
          highlightField("password");
          highlightField("confirmPassword");
          break;
        case password !== confirmPassword:
          errorMessage = "Passwords do not match. Please try again.";
          highlightField("password");
          highlightField("confirmPassword");
          break;
        case !validateEmail(email):
          errorMessage = "Invalid email address. Please enter a valid email.";
          highlightField("email");
          break;
      }

      if (errorMessage !== "") {
        displayErrorMessage(errorMessage);
      } else {
        const user = {
          username: username,
          email: email,
          password: password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");
        window.location.href = "login.html";
      }
    });
  }
  if (loginButton) {
    loginButton.addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      clearErrorMessages();

      let errorMessage = "";

      switch (true) {
        case username.trim() === "":
          errorMessage = "Username is required.";
          highlightField("username");
          break;
        case password.trim() === "":
          errorMessage = "Password is required.";
          highlightField("password");
          break;
        default:
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            const userinfo = JSON.parse(storedUser);
            if (
              username === userinfo.username &&
              password === userinfo.password
            ) {
              alert("Login successful!");
              window.location.href = "/public/index.html";
            } else if (password !== userinfo.password) {
              errorMessage = "Your password is incorrect!";
              highlightField("password");
            } else {
              errorMessage = "Invalid username or password!";
              highlightField("username");
              highlightField("password");
            }
          } else {
            errorMessage = "No user found. Redirecting to registration page.";
            highlightField("username");
            highlightField("password");
          }
          break;
      }

      if (errorMessage !== "") {
        displayErrorMessage(errorMessage);
      }
    });
  }

  function clearErrorMessages() {
    const errorContainer = document.getElementById("errorContainer");
    if (errorContainer) {
      errorContainer.textContent = "";
    }

    const fields = document.querySelectorAll("input[required]");
    fields.forEach((field) => {
      field.style.border = "";
    });
  }

  function displayErrorMessage(message) {
    const errorContainer = document.getElementById("errorContainer");
    if (errorContainer) {
      errorContainer.innerHTML = `<p class="error-message">${message}</p>`;
    }
  }

  function highlightField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.style.border = "1px solid red";
    }
  }

  function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
});
// -------------- end of Sign Up and Login -------------

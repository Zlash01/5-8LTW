const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const logoutBtn = document.getElementById("logoutBtn");
const pageTitleElement = document.getElementById("pageTitle");
const usernameDisplayElement = document.getElementById("usernameDisplay");


const username = getCookie("username");
if (username) {
  if (loginForm) {
    usernameInput.value = username;
    passwordInput.value = getCookie("password");
    pageTitleElement.textContent = `Login`;
  } else {
    usernameDisplayElement.textContent = username;
    logoutBtn.style.display = "block";
  }
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    const isLoggedIn = true;

    if (isLoggedIn) {

      setCookie("username", username, 30);
      setCookie("password", password, 30);


      window.location.href = "inside.html";
    } else {
      alert("Invalid username or password");
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {

    deleteCookie("username");
    deleteCookie("password");


    window.location.href = "index.html";
  });
}

// Cookie functions
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
}

function deleteCookie(name) {
  setCookie(name, "", -1);
}

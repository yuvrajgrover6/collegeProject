import {
    loginEmailPass,
    logout,
    auth,
    getUserEmail,
} from "./services/firebase.js";
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
});
var userCredentials = JSON.parse(localStorage.getItem("user"));

const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", loginEmailPass);
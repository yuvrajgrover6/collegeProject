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

if (userCredentials) {
    const logoutBtn = document.getElementById("indexLogoutButton");
    logoutBtn.addEventListener("click", logout);
} else {
    const loginButton = document.getElementById("loginBtn");
    loginButton.addEventListener("click", loginEmailPass);
}
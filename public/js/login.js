import { loginEmailPass } from "./service/firebase.js";
import { logout } from "./service/firebase.js";
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
});

const auth = getAuth(firebaseApp);
if (localStorage.getItem("user") != undefined)
    var userCredentials = JSON.parse(localStorage.getItem("user"));
if (!userCredentials) {
    location.replace("login.html#");
} else {
    location.replace("index.html#");
}

if (userCredentials) {
    const logoutBtn = document.getElementById("indexLogoutButton");
    logoutBtn.addEventListener("click", logout);
} else {
    const loginButton = document.getElementById("loginBtn");
    loginButton.addEventListener("click", loginEmailPass);
}
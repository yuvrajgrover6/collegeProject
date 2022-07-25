import { logout } from "./services/firebase.js";

const logoutBtn = document.getElementById("indexLogoutButton");
console.log('hello')
logoutBtn.addEventListener("click", logout);
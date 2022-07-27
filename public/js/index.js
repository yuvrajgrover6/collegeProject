import { logout } from "./services/firebase.js";

const logoutBtn = document.getElementById("indexLogoutButton");
logoutBtn.addEventListener("click", logout);
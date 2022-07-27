import { logout,auth } from "./services/firebase.js";
const logoutBtn = document.getElementById("indexLogoutButton");
logoutBtn.addEventListener("click", logout);
var user = auth;
console.log(user);
document.getElementById("welcome").innerHTML = "Welcome " + user.displayName;
import { auth } from "./firebase.js";

auth.onAuthStateChanged(function(user) {
    if (user) {
        location.replace("index.html#");
    } else {
        if (location.pathname != "/public/signUp.html") {
            location.replace("login.html#");
        }
    }
});
import { auth } from "./firebase.js";

auth.onAuthStateChanged(function(user) {
    if (user) {
        location.replace("index.html#");
    } else {
        console.log("from " + location.pathname);
        location.replace("login.html#");
    }
});
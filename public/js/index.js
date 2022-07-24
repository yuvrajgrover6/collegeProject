if (localStorage.getItem("user") != undefined)
    var userCredentials = JSON.parse(localStorage.getItem("user"));
if (!userCredentials) {
    location.replace("login.html#");
} else {
    location.replace("index.html#");
}
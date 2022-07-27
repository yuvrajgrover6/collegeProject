import { signupEmailPass, auth } from "./services/firebase";

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
});
const signupButton = document.getElementById("signUp");
signupButton.addEventListener("click", signupWithEmailAndPassword);

function signupWithEmailAndPassword() {
    debugger;
    const signUpEmail = document.getElementById("signUpEmail").value;
    const signUpPassword = document.getElementById("signUpPassword").value;
    const signUpName = document.getElementById("signUpName").value;
    const signupPhone = document.getElementById("signUpPhone").value;
    signupEmailPass(signUpName, signUpEmail, signupPhone, signUpPassword);
}
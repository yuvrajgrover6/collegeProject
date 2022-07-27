import {
    doc,
    setDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-lite.js";
import { getUserEmail } from "./services/firebase.js";

const clearCart = async() => {
    const db = getFirestore();
    var userCredentials = JSON.parse(localStorage.getItem("user"));
        await setDoc(
            doc(db, "user", getUserEmail()), {
                cart: null
            },
        ).then(Toast.show("Checked Out", "Sucessfully", "success"));
        location.replace('index.html#');

};
document.getElementById("checkOut").addEventListener("click", clearCart());

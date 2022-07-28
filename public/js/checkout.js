import {
    doc,
    updateDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-lite.js";
import { getUserEmail } from "./services/firebase.js";

async function clearCart() {
    const db = getFirestore();
    var userCredentials = JSON.parse(localStorage.getItem("user"));
    await updateDoc(doc(db, "user", getUserEmail()), {
        cart: null,
    });
    Toast.show("Checked Out", "Sucessfully", "success")

    setTimeout(() => {
    location.replace("index.html#");}, 2000);
    
}
document.getElementById("checkOut").addEventListener("click", clearCart);


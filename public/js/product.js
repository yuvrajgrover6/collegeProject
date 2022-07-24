import { firebaseApp, getUserEmail } from "./services/firebase.js";
import {
    doc,
    getDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-lite.js";
const db = getFirestore();

const ref = doc(db, `user/${getUserEmail()}`);
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
    const user_data = docSnap.data();
} else {
    console.log("No such document!");
}

let user_cart;
if (user_data) {
    user_cart = user_data.cart;
}

console.log(user_cart);
document.getElementById("support").innerHTML = Product.name;
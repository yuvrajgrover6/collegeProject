import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import {
    doc,
    updateDoc,
    getDoc,
    setDoc,
    getFirestore,
    arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-lite.js";
export const firebaseApp = initializeApp({
    apiKey: "AIzaSyA2QWk54gkOWIEW15tFL8-4o9Vra7oCOxI",
    authDomain: "collegecanteenmanagement.firebaseapp.com",
    databaseURL: "https://collegecanteenmanagement-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "collegecanteenmanagement",
    storageBucket: "collegecanteenmanagement.appspot.com",
    messagingSenderId: "342578691892",
    appId: "1:342578691892:web:d0bee52ef6523fe1662f61",
});
export const auth = getAuth(firebaseApp);

if (localStorage.getItem("user") != undefined)
    var userCredentials = JSON.parse(localStorage.getItem("user"));
if (!userCredentials) {
    console.log('replacing login')
    location.replace("login.html#");
} else {
    console.log('replacing index')
    console.log(userCredentials)
    location.replace("index.html#");
}

export const loginEmailPass = async() => {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const userCredentials = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        )
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            return;
        })
        .then((user) => {
            if (user != undefined) {
                localStorage.setItem("user", JSON.stringify(user));
                location.replace("index.html#");
            }
            console.log(user);
        });
};
export const logout = async() => {
    await signOut(auth);
    window.localStorage.clear();
    window.location.replace("login.html#");
};

export function getUserEmail() {
    var userCredentials = JSON.parse(localStorage.getItem("user"));
    return userCredentials.user.email;
}

async function getProductPresenceByName(name) {
    const db = getFirestore();
    const ref = doc(db, "user", getUserEmail());
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        const user_data = docSnap.data();
        return !user_data.cart.every((element) => {
            return element.name != name;
        });
    }
    return false;
}

const addToCart = async(name, imageUrl, price) => {
    const db = getFirestore();
    var userCredentials = JSON.parse(localStorage.getItem("user"));
    if (await getProductPresenceByName(name)) {
        Toast.show("Item Already exists", "In cart", "warning");
    } else {
        await setDoc(
            doc(db, "user", getUserEmail()), {
                cart: arrayUnion({ name: name, image: imageUrl, price: price }),
            }, { merge: true }
        ).then(Toast.show("Item Successfully", "Added to Cart", "success"));
    }

    return false;
};
window.addToCart = addToCart;
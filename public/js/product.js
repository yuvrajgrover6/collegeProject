import {firebaseApp} from './firebase.js'
import {  doc, getDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-lite.js';
var userCredentials = JSON.parse(localStorage.getItem('user'));
const db = getFirestore();
firebaseApp();
class Product {
    constructor (name, imageUrl, price) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
    toString() {
        return this.name + ', ' + this.imageUrl + ', ' + this.price;
    }
}

// Firestore data converter
const productConverter = {
    toFirestore: (product) => {
        return {
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Product(data.name, data.imageUrl, data.price);
    }
};
const email = userCredentials.user.email;
const ref = doc(db, "user", email).withConverter(productConverter);
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
    const product = docSnap.data();
    console.log(product.toString());
} else {
    console.log("No such document!");
}
document.getElementById("support").innerHTML = Product.name;
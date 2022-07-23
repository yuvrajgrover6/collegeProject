import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { doc, setDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-lite.js';
const firebaseApp = initializeApp({
  apiKey: "AIzaSyA2QWk54gkOWIEW15tFL8-4o9Vra7oCOxI",
  authDomain: "collegecanteenmanagement.firebaseapp.com",
  databaseURL: "https://collegecanteenmanagement-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "collegecanteenmanagement",
  storageBucket: "collegecanteenmanagement.appspot.com",
  messagingSenderId: "342578691892",
  appId: "1:342578691892:web:d0bee52ef6523fe1662f61"
});

const auth = getAuth(firebaseApp);
if (localStorage.getItem('user') != undefined)
  var userCredentials = JSON.parse(localStorage.getItem('user'));
if (!userCredentials) {
  location.replace("login.html#")
}
else {
  location.replace("index.html#")
}
const loginEmailPass = async () => {
  console.log("login")
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
    return
  }).then((user) => {
    if (user != undefined) {
      localStorage.setItem('user', JSON.stringify(user));
      location.replace("index.html")
    }
    console.log(user)
  });
}
const logout = async () => {
  await signOut(auth);
  localStorage.clear();
  window.replace("login.html")
}

if (userCredentials) {
  const logoutBtn = document.getElementById("indexLogoutButton");
  logoutBtn.addEventListener("click", logout);
} else {
  const loginButton = document.getElementById("loginBtn");
  loginButton.addEventListener("click", loginEmailPass);
}





// const addBurger = document.getElementById("addBurger");
const Burger = {
init(){

   },
   async  addToCart (name,imageUrl,price)  {
    const db = getFirestore();
    const email = userCredentials.user.email
    await setDoc(doc(db, "cart", email), {
      name: name,
      state: imageUrl,
      price: price
    }).then(Toast.show('Item Successfully','Added to Cart','success'))
  }
 

}
// addBurger.addEventListener("click",()=>addToCart('Veg Tikki Burger','https://firebasestorage.googleapis.com/v0/b/collegecanteenmanagement.appspot.com/o/ff%2Ffries.png?alt=media&token=dfcd276e-211e-4a3c-bea3-70cf26e3ee00',40))

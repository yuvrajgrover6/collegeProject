import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

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
onAuthStateChanged(auth, (user) => {
  if (user == null) {
    location.replace("login.html")
  }
  else {
    location.replace("index.html")
    alert('Thanks for login' + user.email);
  }
});

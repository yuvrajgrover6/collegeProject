import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {getAuth, onAuthStateChanged , signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

const firebaseApp = initializeApp( {
  apiKey: "AIzaSyA2QWk54gkOWIEW15tFL8-4o9Vra7oCOxI",
  authDomain: "collegecanteenmanagement.firebaseapp.com",
  databaseURL: "https://collegecanteenmanagement-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "collegecanteenmanagement",
  storageBucket: "collegecanteenmanagement.appspot.com",
  messagingSenderId: "342578691892",
  appId: "1:342578691892:web:d0bee52ef6523fe1662f61"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth,(user)=>{
  if(user !== null){
    location.replace("index.html")
    document.getElementById("indexLogoutButton").innerHTML = '<i class="ti-power-off"></i><a href="login.html#">LogOut</a>';
  }
  else{
    
    document.getElementById("indexLoginButton").innerHTML = '<i class="ti-power-off"></i><a href="login.html#">Login</a>';
  }
});

const loginEmailPass = async ()=> {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
 const userCredentials = await signInWithEmailAndPassword(auth,loginEmail,loginPassword).catch((error) => {
  const errorMessage = error.message;
  alert(errorMessage)
});
}

const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", loginEmailPass);


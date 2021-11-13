// Import firebase
import  firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, you have to paste here the object that comes from firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJMJLZ1PDTNxHeQBiAScKNAN3ku9kD4_A",
  authDomain: "react-autenticacion-111.firebaseapp.com",
  projectId: "react-autenticacion-111",
  storageBucket: "react-autenticacion-111.appspot.com",
  messagingSenderId: "1089159111542",
  appId: "1:1089159111542:web:41a6356ce12742d81c1057"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  console.info({ firebase });
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
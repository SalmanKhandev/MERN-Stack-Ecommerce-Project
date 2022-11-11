import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi17wz0_UjMkXN4pnl7mRamnl8qUUR-Yw",
  authDomain: "ecommerce-89447.firebaseapp.com",
  projectId: "ecommerce-89447",
  storageBucket: "ecommerce-89447.appspot.com",
  messagingSenderId: "497092692377",
  appId: "1:497092692377:web:018ea1bde57d8e8748ab08"
};

const app = firebase.initializeApp(firebaseConfig);
export const authentication = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

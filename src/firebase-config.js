import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyWkOLE4BVCMPsqXD3zb-di7AZUp_VFFo",
  authDomain: "ecommerce-36b3d.firebaseapp.com",
  projectId: "ecommerce-36b3d",
  storageBucket: "ecommerce-36b3d.appspot.com",
  messagingSenderId: "836434814406",
  appId: "1:836434814406:web:05f472574491a5f5fc3ec7",
  measurementId: "G-W207XXY18Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };
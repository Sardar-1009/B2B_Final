import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBuOwlakRvRFdSQaUBBnntJ_VK4jtiRz68",
  authDomain: "b2bfinal-be16b.firebaseapp.com",
  databaseURL: "https://b2bfinal-be16b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "b2bfinal-be16b",
  storageBucket: "b2bfinal-be16b.firebasestorage.app",
  messagingSenderId: "582151462295",
  appId: "1:582151462295:web:b954257b62119d6098b8d2",
  measurementId: "G-FCEF6F7NV8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export async function emailSignIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function emailSignUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function userSignOut() {
  return await signOut(auth);
}

 
export const storage = getStorage(app);  


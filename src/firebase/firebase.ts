import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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


export const auth = getAuth(app);        
export const db = getFirestore(app);     
export const storage = getStorage(app);  

export default app;

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { 
    getFirestore, collection, getDocs, addDoc, query, orderBy, onSnapshot,
    deleteDoc, updateDoc, doc , where
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyCxHPSFoZ85O9fx53DMWDc1hg0wRO7l0z4",
    authDomain: "projectroom-6f3fa.firebaseapp.com",
    projectId: "projectroom-6f3fa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export biar bisa dipakai di file lain
export { db, collection, getDocs, addDoc, query, orderBy, onSnapshot, deleteDoc, updateDoc, doc, where};
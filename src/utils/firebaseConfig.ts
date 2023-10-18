import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCc4FF3OhovWeDWwDqFOeI7q8jq3xh9mCI",
  authDomain: "zoom-clone-576b7.firebaseapp.com",
  projectId: "zoom-clone-576b7",
  storageBucket: "zoom-clone-576b7.appspot.com",
  messagingSenderId: "639481359275",
  appId: "1:639481359275:web:e5bca060b61e2fff2d80ee",
  measurementId: "G-LXP6MJSG9L",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");

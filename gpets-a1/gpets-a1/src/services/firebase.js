import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRkAM1XXS13EBdJ0ISEoVo7ksmruUwAX4",
  authDomain: "gpets-94781.firebaseapp.com",
  databaseURL: "https://gpets-94781-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gpets-94781",
  storageBucket: "gpets-94781.firebasestorage.app",
  messagingSenderId: "1028215537834",
  appId: "1:1028215537834:web:c4241331059d035e8e50d3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

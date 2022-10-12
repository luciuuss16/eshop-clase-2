import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUg4SlkJOwfoVhhZDgh8R-AGqDmo28UHw",
  authDomain: "eshop-clase-2.firebaseapp.com",
  projectId: "eshop-clase-2",
  storageBucket: "eshop-clase-2.appspot.com",
  messagingSenderId: "445322146399",
  appId: "1:445322146399:web:63fe3a72c0045c976221ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);    
    });
}
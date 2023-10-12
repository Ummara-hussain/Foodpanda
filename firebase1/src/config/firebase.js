import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDEYUKNGXqhdbgwmftNn5QOvw7Zn0EzpW0",
    authDomain: "authentication-77ed5.firebaseapp.com",
    projectId: "authentication-77ed5",
    storageBucket: "authentication-77ed5.appspot.com",
    messagingSenderId: "486382185097",
    appId: "1:486382185097:web:cfebdd99a2ed1760543458",
    measurementId: "G-37XL22ZRH1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function register(email, password, fullname, age) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    fullname: fullname,
                    email: email,
                    age: age
                });
                alert('successfully registered')
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
                alert(e.message)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Successfully logged in')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

export { register, login }
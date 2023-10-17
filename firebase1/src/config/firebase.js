import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'
import PostDetails from "../views/PostDetails";

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
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function details(id) {
    const docRef = doc(db, "ads", id);
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            const ads = docSnap.data()
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        } return docSnap.data()
    } catch (e) {
        Swal.fire(e.message)
    }
}
async function register(email, password, fullname, age) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const docRef = await addDoc(collection(db, "users"), {
            fullname: fullname,
            email: email,
            age: age
        });
        Swal.fire('successfully registered')
    } catch (e) {
        Swal.fire(e.message)
    }
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

async function postAd({ title, description, price, file }) {
    try {
        const url = await uploadImage(file)
        const data = { title, description, price: +price, imageUrl: url }
        await addDoc(collection(db, "ads"), data);
        Swal.fire('Ad posted sucessfully!')
    } catch (e) {
        Swal.fire(e.message)
    }
}

async function uploadImage(file) {
    const storageRef = ref(storage, 'ads/' + file.name);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}

async function getAds() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const ads = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        ads.push(data);
    });
    return ads
}
export { register, login, getAds, postAd, details }
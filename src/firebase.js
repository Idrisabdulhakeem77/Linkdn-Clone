import {initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth  , GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDawN0zKQB5H8u65LhSqUedo-m6FNY8In0",
    authDomain: "linkedin-clone-788c4.firebaseapp.com",
    projectId: "linkedin-clone-788c4",
    storageBucket: "linkedin-clone-788c4.appspot.com",
    messagingSenderId: "242067231610",
    appId: "1:242067231610:web:db859424dddd6cbf623cc3",
    measurementId: "G-3NNZHKHC45"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const provider = new GoogleAuthProvider();

export { auth , provider , storage}
export default  db


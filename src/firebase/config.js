
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqtNPp1rpOjAZ0TUMSuwuYeMMNdX1bJlI",
    authDomain: "photo-gallery-react-a6834.firebaseapp.com",
    projectId: "photo-gallery-react-a6834",
    storageBucket: "photo-gallery-react-a6834.appspot.com",
    messagingSenderId: "159354710437",
    appId: "1:159354710437:web:bfa6ef813b0d3010efa04c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAbeP__hzDc9RoVqedLLWdHUGDgftsyF-w",
    authDomain: "crwn-db-1ec70.firebaseapp.com",
    projectId: "crwn-db-1ec70",
    storageBucket: "crwn-db-1ec70.appspot.com",
    messagingSenderId: "44185702539",
    appId: "1:44185702539:web:db9cc0e94b7b3ef6ce848e",
    measurementId: "G-NTCQ95MXW9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
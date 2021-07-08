import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIjrtoW90KgCbLK-8pYA1iPg9afE6-U8w",
    authDomain: "crwn-website.firebaseapp.com",
    projectId: "crwn-website",
    storageBucket: "crwn-website.appspot.com",
    messagingSenderId: "698962517217",
    appId: "1:698962517217:web:941835e41fe1282ef9aba0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
export const signInWithGoogle = () => auth.signInWithPopup(provider);

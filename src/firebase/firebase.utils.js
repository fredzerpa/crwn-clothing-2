import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgKahxTqb08e7kaUq9UvuJCkqycNZx--I",
    authDomain: "crwn-db-63512.firebaseapp.com",
    databaseURL: "https://crwn-db-63512.firebaseio.com",
    projectId: "crwn-db-63512",
    storageBucket: "crwn-db-63512.appspot.com",
    messagingSenderId: "309529799958",
    appId: "1:309529799958:web:ac0bd4c452160a3260b437"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
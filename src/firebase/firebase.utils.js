import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA67JWTbX7SAGtU_fFlNMVz4TZu9qzoPRY",
  authDomain: "crwn-db-30a5f.firebaseapp.com",
  projectId: "crwn-db-30a5f",
  storageBucket: "crwn-db-30a5f.appspot.com",
  messagingSenderId: "815572947368",
  appId: "1:815572947368:web:007dd81937374deecc4d9d",
  measurementId: "G-56CRKCP1XD",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createFirebaseUser = async (userAuth, additionalProps) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalProps,
      });
    } catch (e) {
      console.error(e.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => auth.signInWithPopup(provider);

export default firebase;

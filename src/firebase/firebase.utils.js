import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCFdhLdDhtIh4fZLU_UKF-j46T4_Et4lvc',
  authDomain: 'sneakerstash-db.firebaseapp.com',
  databaseURL: 'https://sneakerstash-db.firebaseio.com',
  projectId: 'sneakerstash-db',
  storageBucket: 'sneakerstash-db.appspot.com',
  messagingSenderId: '625036956130',
  appId: '1:625036956130:web:022d4c878630c49e60a9bb',
  measurementId: 'G-S60TSHQFSE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

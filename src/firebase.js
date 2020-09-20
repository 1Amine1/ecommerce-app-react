import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCob_lIPYPKfWkk50_uN44QoQkqVk4Wq7w",
    authDomain: "amzon-react-clone.firebaseapp.com",
    databaseURL: "https://amzon-react-clone.firebaseio.com",
    projectId: "amzon-react-clone",
    storageBucket: "amzon-react-clone.appspot.com",
    messagingSenderId: "761045559619",
    appId: "1:761045559619:web:48c73f20a2c7740b96e7f6",
    measurementId: "G-RS206V32NG"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
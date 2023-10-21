import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDM9TWPOYJqRlC7sguiWApuWTfqqxmj4B4",
  authDomain: "disney-clone-c31d2.firebaseapp.com",
  projectId: "disney-clone-c31d2",
  storageBucket: "disney-clone-c31d2.appspot.com",
  messagingSenderId: "352139177507",
  appId: "1:352139177507:web:56e172f0817e48f896cb96",
  measurementId: "G-XET84G7QYY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

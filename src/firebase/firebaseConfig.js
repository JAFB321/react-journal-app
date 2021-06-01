import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCE2VEkwRc2kDk9y66-8LbEFRk_8JFmlks",
	authDomain: "react-journal-app-f3896.firebaseapp.com",
	projectId: "react-journal-app-f3896",
	storageBucket: "react-journal-app-f3896.appspot.com",
	messagingSenderId: "900250966380",
	appId: "1:900250966380:web:4ad688a89160c44949fb49",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
apiKey: "AIzaSyA-pQHIQeFf-zGlvgLZYdYq_rnhGCeWrEA",
authDomain: "e-rider-e1628.firebaseapp.com",
projectId: "e-rider-e1628",
storageBucket: "e-rider-e1628.appspot.com",
messagingSenderId: "292632863483",
appId: "1:292632863483:web:646010b8a9dc585929c65e"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from "firebase";
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
var fire = firebase.initializeApp(config);
export default fire;

import firebase from "firebase";
var config = {
  apiKey: "AIzaSyCRs0CDvdhpnDmsvumVloYwDlFfBctAQWs",
  authDomain: "ecertify.firebaseapp.com",
  databaseURL: "https://ecertify.firebaseio.com",
  projectId: "ecertify",
  storageBucket: "ecertify.appspot.com",
  messagingSenderId: "410122053441"
};
var fire = firebase.initializeApp(config);
export default fire;

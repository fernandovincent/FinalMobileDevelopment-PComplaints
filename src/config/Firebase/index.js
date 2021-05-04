import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDlgSHIIW--uNTqbdSgL2r1Chl0mn62V54',
  authDomain: 'finalmobpro-263ec.firebaseapp.com',
  databaseURL:'https://finalmobpro-263ec-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'finalmobpro-263ec',
  storageBucket: 'finalmobpro-263ec.appspot.com',
  messagingSenderId: '40677415151',
  appId: '1:40677415151:web:d8fa3455305d83ac7de31a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

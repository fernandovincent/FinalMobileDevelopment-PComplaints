import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyA-f-JZoBcjhclw49QxJ-iXz03-AsN8V_Q',
  authDomain: 'final-project-mopro.firebaseapp.com',
  databaseURL: 'https://final-project-mopro-default-rtdb.firebaseio.com',
  projectId: 'final-project-mopro',
  storageBucket: 'final-project-mopro.appspot.com',
  messagingSenderId: '195565330549',
  appId: '1:195565330549:web:c3edae8210cfd6d99d183c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

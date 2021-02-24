import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCyz48c1p2vvHSlcOY1LkR6mQ3q19pp094',
  authDomain: 'slack-react-73f8b.firebaseapp.com',
  projectId: 'slack-react-73f8b',
  storageBucket: 'slack-react-73f8b.appspot.com',
  messagingSenderId: '1099430597069',
  appId: '1:1099430597069:web:ba25029b385d2ffc047484',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

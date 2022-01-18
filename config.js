import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrqjfXBI4GHkZc4RKjXgMvsEie3iHQxT8",
    authDomain: "test-project-91b4c.firebaseapp.com",
    projectId: "test-project-91b4c",
    storageBucket: "test-project-91b4c.appspot.com",
    messagingSenderId: "242143783277",
    appId: "1:242143783277:web:820822756603d196ba1264"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAAAsuco_9n1G9c-9roVl3P9g6JCn_rqhs',
  authDomain: 'spent-b63e5.firebaseapp.com',
  databaseURL: 'https://spent-b63e5.firebaseio.com',
  projectId: 'spent-b63e5',
  storageBucket: 'spent-b63e5.appspot.com',
  messagingSenderId: '963569261218',
};

firebase.initializeApp(config);

export default firebase;

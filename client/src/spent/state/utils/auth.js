import firebase from 'spent/firebase';

const authentication = ({
  startSession: {
    with: {
      emailAndPassword: async (email, password) => (
        firebase.auth().signInWithEmailAndPassword(email, password)
      ),
      google: async () => (
        firebase.auth().signInWithRedirect((new firebase.auth.GoogleAuthProvider()))
      ),
      facebook: async () => (
        firebase.auth().signInWithRedirect((new firebase.auth.FacebookAuthProvider()))
      ),
    },
  },
  createUser: {
    with: {
      emailAndPassword: async (email, password) => (
        firebase.auth().createUserWithEmailAndPassword(email, password)
      ),
    },
  },
  endSession: async () => firebase.auth().signOut(),
  listen: (callback) => {
    firebase.auth().onAuthStateChanged(callback);
  },
});

export default authentication;

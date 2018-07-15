import firebase from 'spent/firebase';

const authentication = ({
  startSession: {
    with: {
      emailAndPassword: async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      },
      google: async () => {
        return firebase.auth().signInWithRedirect((new firebase.auth.GoogleAuthProvider()))
      }
    }
  },
  createUser: {
    with: {
      emailAndPassword: async (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
      }
    }
  },
  endSession: async () => {
    return firebase.auth().signOut();
  },
  listen: (callback) => {
    return firebase.auth().onAuthStateChanged(callback);
  },
});

export default authentication;

import firebase from 'firebase';

const authentication = ({
  startSession: {
    with: {
      emailAndPassword: async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
      }
    }
  },
  endSession: () => {},
});

export default authentication;

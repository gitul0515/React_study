import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }

  onAuthStateChanged(callBackFunc) {
    firebase.auth().onAuthStateChanged(user => {
      callBackFunc(user);
    })
  }
}

export default AuthService;

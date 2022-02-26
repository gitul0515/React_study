import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC4FgKJbdPv9v2QB-cZwqfQUzlUUhDI5XQ',
  authDomain: 'business-card-maker-6b936.firebaseapp.com',
  projectId: 'business-card-maker-6b936',
  appId: '1:242268638082:web:efd9f6337631f3ebf05d9b'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;


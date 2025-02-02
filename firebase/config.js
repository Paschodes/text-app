import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPfeJRfX7KG1vSZAbQNLhGCHYIWeSmJYw",
  authDomain: "text-app-f0f30.firebaseapp.com",
  projectId: "text-app-f0f30",
  storageBucket: "text-app-f0f30.firebasestorage.app",
  messagingSenderId: "777166014631",
  appId: "1:777166014631:web:dbef0b4386ca5cab8ff382",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

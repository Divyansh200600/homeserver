import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4DnI-a3ZmNNSMW0aYL-6fc1--7AsfRQ4",
  authDomain: "home-server-f7c9f.firebaseapp.com",
  projectId: "home-server-f7c9f",
  storageBucket: "home-server-f7c9f.appspot.com",
  messagingSenderId: "269422026378",
  appId: "1:269422026378:web:d6c2e61caf3155b29dd773",
  measurementId: "G-1MCSDV2WB1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

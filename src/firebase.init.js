import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1-cnUvpXT5K8iBwjUFx7bODHJ9K6rGz0',
  authDomain: 'ema-john-simple-d0f79.firebaseapp.com',
  projectId: 'ema-john-simple-d0f79',
  storageBucket: 'ema-john-simple-d0f79.appspot.com',
  messagingSenderId: '816632478236',
  appId: '1:816632478236:web:07850d124d40217d813dd9',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

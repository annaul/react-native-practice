import * as firebase from 'firebase';
import { API_KEY, AUTH_DOMAINE, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET } from "react-native-dotenv"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAINE,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);

import * as firebase from 'firebase';
import { API_KEY, AUTH_DOMAINE, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET } from "react-native-dotenv";
import RNFetchBlob from 'react-native-fetch-blob';


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAINE,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);

RNFetchBlob
  .config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
    fileCache : true,
  })
  .fetch('GET', 'https://firebasestorage.googleapis.com/v0/b/react-test-ba5ac.appspot.com/o/greens.jpeg?alt=media&token=ee2e90a7-31aa-4378-9a96-778a39a4e0de', {
    //some headers ..
  })
  .then((res) => {
    './app/config/images/'
    console.log('The file saved to ', res.path())
  })

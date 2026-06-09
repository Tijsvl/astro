import { browser } from '$app/environment';
import { getFirestore } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {
  PUBLIC_FIREBASE_APIKEY,
  PUBLIC_FIREBASE_AUTHDOMAIN,
  PUBLIC_FIREBASE_DATABASEURL,
  PUBLIC_FIREBASE_PROJECTID,
  PUBLIC_FIREBASE_STORAGEBUCKET,
  PUBLIC_FIREBASE_MESSAGINGSENDERID,
  PUBLIC_FIREBASE_APPID,
  PUBLIC_FIREBASE_MEASUREMENTID
} from '$env/static/public';

const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_APIKEY,
  authDomain: PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: PUBLIC_FIREBASE_DATABASEURL,
  projectId: PUBLIC_FIREBASE_PROJECTID,
  storageBucket: PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: PUBLIC_FIREBASE_APPID,
  measurementId: PUBLIC_FIREBASE_MEASUREMENTID
};

if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
  if (browser) getAnalytics(app);
}

export const db = getFirestore();

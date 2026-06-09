import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const { PRIVATE_FIREBASE_PROJECTID, PRIVATE_FIREBASE_PRIVATEKEY, PRIVATE_FIREBASE_CLIENTEMAIL } = import.meta.env;

if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId: PRIVATE_FIREBASE_PROJECTID,
      privateKey: PRIVATE_FIREBASE_PRIVATEKEY.replace(/\\n/g, '\n'),
      clientEmail: PRIVATE_FIREBASE_CLIENTEMAIL
    })
  });
}

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

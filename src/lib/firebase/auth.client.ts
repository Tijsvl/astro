import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';

export const loginWithGoogle = async () => {
  const auth = getAuth();
  const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());

  return userCredential.user;
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
  return userCredential.user;
};

export const registerWithEmailAndPassword = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
  return userCredential.user;
};

export const forgotPassword = async (email: string) => {
  await sendPasswordResetEmail(getAuth(), email);
};

export const logout = async () => {
  await signOut(getAuth());
  await fetch('/api/logout');
};

export const sendJWT = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) return;

  const token = await user.getIdToken(true);
  await fetch('/api/token', {
    method: 'POST',
    body: JSON.stringify({
      token,
      email: user.email
    })
  });
};

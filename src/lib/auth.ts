import { auth, db } from "@/config/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    return error;
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    return error;
  }
};

export const getUser = async (user: User) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    return null;
  }
};

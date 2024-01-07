import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import { Visitor } from './model/visitor';


const firebaseConfig = {
  apiKey: "AIzaSyAQx4TnM3XIf-Mp_XUp1pN-Hsf0AKKe-eo",
  authDomain: "tomika-f62a1.firebaseapp.com",
  projectId: "tomika-f62a1",
  storageBucket: "tomika-f62a1.appspot.com",
  messagingSenderId: "215561604477",
  appId: "1:215561604477:web:a6bc047d86687f41205014",
  measurementId: "G-EL7E921FV1"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const addVisitor = async (visitor: Visitor): Promise<string> => {
  try {
    await setDoc(doc(db, "visitors", visitor.name), {
      invitationId: visitor.invitationId,
      allergies: visitor.allergies,
      welcomeDrink: visitor.welcomeDrink,
      preferences: visitor.preferences
    });
  } catch(error: any) {
    return error.code;
  }
  return 'success';
}

export const submitInvitation = async (invitationId: string): Promise<string> => {
  try {
    await setDoc(doc(db, "submitted", invitationId), {});
  } catch(error: any) {
    return error.code;
  }
  return 'success';
}
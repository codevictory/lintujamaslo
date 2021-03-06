import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import { Visitor } from './model/visitor';


const firebaseConfig = {
  apiKey: "AIzaSyBcE9X0ueyczUqpjm0bK9UDrzvDmB96pr4",
  authDomain: "lintujamaslo.firebaseapp.com",
  projectId: "lintujamaslo",
  storageBucket: "lintujamaslo.appspot.com",
  messagingSenderId: "110340750803",
  appId: "1:110340750803:web:89f5187720e77fc2788326"
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
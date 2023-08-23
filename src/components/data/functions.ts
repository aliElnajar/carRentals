import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { formTypes } from "../../../types";
export const fetchingFrmFirebase = async (collectionName: string) => {
  let carsArray: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      const currDoc: any = doc.data();
      carsArray.push({ ...currDoc });
    });
    return carsArray;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const addingDocToFirebase = async (document: formTypes) => {
  const collectionName = document.car ? "partnershipRequests" : "rentRequests";

  try {
    await addDoc(collection(db, collectionName), document);
  } catch (err: any) {
    throw new Error(err);
  }
};

import {
  collection,
  addDoc,
  getDocs,
  doc,
  DocumentReference,
  DocumentData,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { fb_db } from "@/firebase/firebase.config";

export const FirebaseFirestoreService = {
  addData: async (collectionName: string, data: any) => {
    try {
      const docRef = await addDoc(collection(fb_db, collectionName), data);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  },

  readData: async (collectionName: string) => {
    try {
      const querySnapshot = await getDocs(collection(fb_db, collectionName));
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (e) {
      console.error("Error reading document: ", e);
      return null;
    }
  },

  getCollectionRef: (collectionName: string) => {
    return doc(fb_db, collectionName);
  },

  writeDoc: async (
    docRef: DocumentReference<DocumentData, DocumentData>,
    data: any
  ) => {
    try {
      await setDoc(docRef, data);
      return true;
    } catch (e) {
      console.error("Error writing document: ", e);
      return false;
    }
  },

  updateData: async (
    docRef: DocumentReference<DocumentData, DocumentData>,
    data: any
  ) => {
    try {
      await updateDoc(docRef, data, { merge: true });
      return true;
    } catch (e) {
      console.error("Error updating document: ", e);
      return false;
    }
  },

  deleteData: async (
    docRef: DocumentReference<DocumentData, DocumentData>
  ) => {
    try {
      await deleteDoc(docRef);
      return true;
    } catch (e) {
      console.error("Error deleting document: ", e);
      return false;
    }
  },

};

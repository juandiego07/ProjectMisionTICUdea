import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// import { getAuth, } from "firebase/auth";
//  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

import {
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
// setDoc, getDoc, deleteDoc } from 'firebase/firestore'

import { v4 as uuidv4 } from "uuid";

// Inicialización de llaves para conexión a Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5E__etU6IXlhswKakyRM88eXABPQRbUE",
  authDomain: "list-task-78971.firebaseapp.com",
  projectId: "list-task-78971",
  storageBucket: "list-task-78971.appspot.com",
  messagingSenderId: "418201574141",
  appId: "1:418201574141:web:5f2309c6da22c0f195bc94",
  measurementId: "G-2ZGZ25R5FK",
};

export const getId = () => {
  return uuidv4();
};

initializeApp(firebaseConfig);

// Se exporta varibable para conexión a base de datos.
// const auth = getAuth();
const database = getFirestore();

export const saveData = async (nameCollection, data) => {
  try {
    const response = await addDoc(collection(database, nameCollection), data);

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const getData = async (nameCollection) => {
  try {
    const response = await getDocs(query(collection(database, nameCollection)));
    const dataColletion = response.docs.map((item) => {
      const itemTemp = {
        id: item.id,
        ...item.data(),
      };
      return itemTemp;
    });
    return dataColletion;
  } catch (e) {
    throw new Error(e);
  }
};

export const getItem = async (nameCollection, idDoc) => {
  try {
    const item = await getDoc(doc(database, nameCollection, idDoc));
    const response = {
      id: item.id,
      ...item.data(),
    };
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

// export const getItem = async (nameCollection, idDoc) => {
//   try {
//     const item = await getDocs(
//       query(collection(database, nameCollection), where("uuid", "==", idDoc))
//     );

//     const response = item.docs.map((doc) => {
//       const data = {
//         uuid: doc.uuid,
//         ...doc.data(),
//       };
//       return data;
//     });
//     return response;
//   } catch (e) {
//     throw new Error(e);
//   }
// };

// export const consultarDocumentoDatabase = async (nombreDatabase, id) => {
//   try {
//     const response = await getDoc(doc(database, nombreDatabase, id));
//     const document = {
//       id: response.id,
//       ...response.data(),
//     };
//     return document;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// Actualizar un documento
export const updateItem = async (nameCollection, idDoc, data) => {
  try {
    const item = doc(database, nameCollection, idDoc);
    const response = await updateDoc(item, data);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

// export const updateItem = async (nameCollection, idDoc, data) => {
//   try {
//     const response = await updateDoc(
//       doc(database, nameCollection, idDoc),
//       data
//     );
//   } catch (e) {
//     throw new Error(e);
//   }
// };

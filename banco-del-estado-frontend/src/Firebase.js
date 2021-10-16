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
} from "firebase/firestore";
//  updateDoc, deleteDoc } from 'firebase/firestore'

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
      const itemtemp = {
        id: item.id,
        ...item.data(),
      };
      return itemtemp;
    });
    return dataColletion;
  } catch (e) {
    throw new Error(e);
  }
};

export const getItem = async (nameCollection, idDoc) => {
  try {
    const item = await getDoc(doc(collection(database, nameCollection),idDoc));
    const response = {
      id: item.id,
      ...item.data(),
    };
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

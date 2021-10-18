import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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





export const app = initializeApp(firebaseConfig);
const database = getFirestore();
const auth = getAuth();
export let usuario;

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

export const updateItem = async (nameCollection, idDoc, data) => {
  try {
    const item = doc(database, nameCollection, idDoc);
    const response = await updateDoc(item, data);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const createUser = async (email, password) => {
  try {
    const dataUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      email: dataUser.user.email,
      rol: "Pendiente",
      state: "Pendiente",
    };
    saveData("listUsers", user);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

// Login Usuarios
export const loginUser = async (email, password) => {
  try {
    const dataUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return dataUser.user;
  } catch (e) {
    throw new Error(e);
  }
};

// LogOut -> salir
export const logOutUser = async () => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

//  datos usuario
export const dataUser = async () => {
  try {
    const user = auth.currentUser;
    console.log(user);

    if (user) {
      console.log(user);
      return user;
    } else {
      return undefined;
    }
  } catch (e) {
    throw new Error(e);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    usuario = user;
    console.log("El usuario logueado");
  } else {
    console.log("El usuario ya no esta logueado");
    usuario = undefined;
  }
});
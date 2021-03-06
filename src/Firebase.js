import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";
// ----------------------------------------------- Se declararan constantes globales ------------------------------------------------
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
const provider = new GoogleAuthProvider();
const database = getFirestore();
export const auth = getAuth();
// --------------------------------------------------- Inicio de sesión con Google --------------------------------------------------
export async function loginGoogle() {
  try {

    const response = await await signInWithPopup(auth, provider);
    return response.user;
  } catch (e) {
    return e.code;
  }
}
// --------------------------------------------------- Cerrar sesión con Google --------------------------------------------------
export const logOutUser = async () => {
  try {
    const respuesta = await signOut(auth);
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
};
// --------------------------------------------------- guardar datos en DB --------------------------------------------------
export const saveData = async (nameCollection, data) => {
  try {
    const response = await addDoc(collection(database, nameCollection), data);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
// --------------------------------------------------- Obtener datos de DB --------------------------------------------------
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
// -------------------------------------------- Obtener dato especifico a través de ID --------------------------------------------
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
// ------------------------------------------ Actualizar dato especifico a través de ID ---------------------------------------------
export const updateItem = async (nameCollection, idDoc, data) => {
  try {
    const item = doc(database, nameCollection, idDoc);
    const response = await updateDoc(item, data);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
// ------------------------------------- Obtener dato especifico a través de un campo especifico -------------------------------------
export const getItemField = async (nameCollection, field, idDoc) => {
  try {
    const db = collection(database, nameCollection);
    const response = await getDocs(query(db, where(field, "==", idDoc)));
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

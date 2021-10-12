const app = window.firebase.initializeApp({
  apiKey: "AIzaSyB5E__etU6IXlhswKakyRM88eXABPQRbUE",
  authDomain: "list-task-78971.firebaseapp.com",
  projectId: "list-task-78971",
  storageBucket: "list-task-78971.appspot.com",
  messagingSenderId: "418201574141",
  appId: "1:418201574141:web:5f2309c6da22c0f195bc94",
  measurementId: "G-2ZGZ25R5FK"
});

export const database = window.firebase.firestore();
export default app;
export async function guardarRegistro(task) {
  try {
    const respuesta = await window.firebase.firestore().collection("products").add(task);
    return respuesta;
  } catch (error) {
    throw new Error(error);
  }
}

export async function obtenerRegistro(collection) {
  try {
    const response = await window.firebase.firestore().collection(collection).get();
    return response
  } catch (error) {
    throw new Error(error);
  }
}


const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export async function login() {
  try {
    const response = await auth.signInWithPopup(provider)
    return response
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }

}
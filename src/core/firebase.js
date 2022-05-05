import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, connectFirestoreEmulator, addDoc } from 'firebase/firestore/lite';

initializeApp({
    apiKey: import.meta.env.VITE_APP_APIKEY,
    authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
    databaseURL: import.meta.env.VITE_APP_DATABASEURL,
    projectId: import.meta.env.VITE_APP_PROJECTID,
    storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APP_APPID
});

const db = getFirestore();

if (process.env.NODE_ENV == 'development') {
    connectFirestoreEmulator(db, 'localhost', 8080);
}

async function listAll(collectionName) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
}

async function add(collectionName, doc) {
    const docRef = await addDoc(collection(db, collectionName), doc);
    return docRef.id;
}

export { add, listAll };

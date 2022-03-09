import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, writeBatch } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDaBYOcHRRy1a3XIVnxEbT340K2K7x37YM",
    authDomain: "crwn-db-a0efe.firebaseapp.com",
    projectId: "crwn-db-a0efe",
    storageBucket: "crwn-db-a0efe.appspot.com",
    messagingSenderId: "53043530576",
    appId: "1:53043530576:web:1688d77b3a6b6a0a91ba55",
    measurementId: "G-L7ZFLGF68B"
}

const app = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (userAuth) {
        const userRef = doc(firestore, "users", userAuth.uid);
        const snapshot = await getDoc(userRef);

        if (!snapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(userRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
            } catch (error) {
                console.log('Error creating user', error.message);
            }
        }

        return userRef;
    }
}

export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
    const batch = writeBatch(firestore);
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(firestore, collectionkey, obj.title);
        batch.set(newDocRef, obj);
    })
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const result = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return result.reduce((accum, collection) => {
        accum[collection.title.toLowerCase()] = collection;
        return accum;
    }, {});
}
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { onUnmounted , ref } from 'vue';
import { db } from '../firebase/configs.js';

const getCollection = (collectionName) => {
    const documents = ref(null);
    const error = ref(null); 
    

    // let collectionRef  = collection(db, collectionName);
    // collectionRef.onSnapshot(
    //     (snap)=>{
    //         let results = [];
    //         snap.docs.forEach(doc => {
    //             doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
    //         });
    //         documents.value = results;
    //         error.value = null; 
    //     }
    // ,  (err) => {
    //     console.log(err.message);
    //     documents.value = null;
    //     error.value = 'Could not fetch the data';
    // }
    // );

    // const q = query(collection(db, collectionName));

    const q = query(collection(db, collectionName), orderBy('createdAt'));
    // console.log(collectionName);
    // console.log(q);
    const unsubscribe = onSnapshot(q, (snapshot) => { 
        let results = [];
        // console.log(snapshot.docs);
        
        snapshot.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
        });
        documents.value = results;
        // console.log(results);
        error.value = null; 
    }, (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = 'Could not fetch the data';
    });

    // unsubscribe the listener when the component is unmounted
    onUnmounted(() => {
        unsubscribe();
    });

    return { documents, error };
}

export default getCollection;
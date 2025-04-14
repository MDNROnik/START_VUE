import { ref } from 'vue';
import { db } from '../firebase/configs.js';
import { collection, addDoc } from "firebase/firestore";

// const useCollection = (coll) => { 
//     const error = ref(null);
    
//     const addDoc = async (doc) => {
//         error.value = null;
//         try {
//             await db.collection(coll).add(doc);
//         } catch (err) {
//             error.value = 'Could not add the document';
//             console.error(err);
//         }
//     }
//     return { error, addDoc }
// }

const useCollection = async(collectionName, data) => {
    const colRef = collection(db, collectionName);
    const error = ref(null);
    error.value = null;

    try{
        await addDoc(colRef, data);
    }
    catch (err) {
        error.value = 'Could not add the document';
    }
    return {error};


    // await addDoc(colRef, data)
    //     .then(() => {
    //         console.log("Document written with ID: ", colRef);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //         return error;
    //     });
}
export default useCollection
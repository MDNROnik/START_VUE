import { addDoc, collection } from "firebase/firestore";
import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

// const useCollection = (collection) => {

//   const error = ref(null)
//   const isPending = ref(false);
//   // add a new document
//   const addDoc = async (doc) => {
//     error.value = null
//     isPending.value = true;
//     try {
//       await projectFirestore.collection(collection).add(doc)
//       isPending.value = false;
//       error.value = null
//     }
//     catch(err) {
//       console.log(err.message)
//       error.value = 'could not send the message'
//       isPending.value = false;
//     }
//   }
//   return { error, addDoc, isPending }
// }
// export default useCollection



const useCollection = async(collectionName, data) => {
  const colRef = collection(projectFirestore, collectionName);
  const error = ref(null);
  const isPending = ref(false);
  const res = ref (null);

  isPending.value = true;
  error.value = null;
  res.value = null;

  try{
      const now = await addDoc(colRef, data);
      isPending.value = false;
      error.value = null; 
      res.value = now;
  }
  catch (err) {
      error.value = 'Could not add the document';
      console.log(err.message);
      isPending.value = false;
  }
  return {error, isPending, res};


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


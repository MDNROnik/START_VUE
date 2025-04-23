import { projectFirestore } from '@/firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { ref, watchEffect } from 'vue';

export default function updateDocument(collection, document, id) {
    const error = ref(null)
    if (!document.value) {
        document.value = { song: '' }; 
    }
    // console.log('updateDocument', collection, document, id);
    // console.log('updateDocument', document.value);
    
    const load = async () => {
      try {
        const docRef = doc(projectFirestore, collection, id);
        updateDoc(docRef, {song: document.value})
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
            error.value = error.message
          });
      } catch (err) {
        error.value = err.message
      }
    }
  
  
    watchEffect(() => {
      if (id) {
        load()
      }
    })
//     onUnmounted(() => {
//         load();
// });
  
    return {  error }
  }
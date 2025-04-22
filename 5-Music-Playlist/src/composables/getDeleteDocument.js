import { projectFirestore } from '@/firebase/config';
import { deleteDoc, doc } from "firebase/firestore";
import { ref, watchEffect } from 'vue';


export default function getDocument(collection, id) {
    const error = ref(null)
  
    const load = async () => {
      try {
        await deleteDoc(doc(projectFirestore, collection, id));
      } catch (err) {
        error.value = err.message
      }
    }
  
    watchEffect(() => {
      if (id) {
        load()
      }
    })
    // onUnmounted(() => {
    //     load();
    // });
  
    return { error }
  }
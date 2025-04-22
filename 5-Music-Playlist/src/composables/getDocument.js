import { projectFirestore } from '@/firebase/config';
import { doc, getDoc } from "firebase/firestore";
import { ref, watchEffect, onUnmounted } from 'vue';

export default function getDocument(collection, id) {
    const document = ref(null)
    const error = ref(null)
  
    const load = async () => {
      try {
        const docRef = doc(projectFirestore, collection, id)
        const res = await getDoc(docRef)
        if (!res.exists()) {
          throw Error("Document does not exist")
        }
        document.value = res.data()
      } catch (err) {
        error.value = err.message
      }
    }
  
    watchEffect(() => {
      if (id) {
        load()
      }
    })
    onUnmounted(() => {
        load();
});
  
    return { document, error }
  }
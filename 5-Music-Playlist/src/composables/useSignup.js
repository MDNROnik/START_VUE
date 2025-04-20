
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { projectAuth } from '@/firebase/config.js'; // Adjust the path as necessary

const error = ref(null);
const isPending = ref(false);
const signUp = async (email, password, displayName) => {
  error.value = null
  isPending.value = true
    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password)
        if (!res) {
          throw new Error('Could not complete signUp')
        }
        await updateProfile(res.user, { displayName })
        console.log(res.user);
        isPending.value = false
        error.value = null
        return res
    } catch (err) {
        console.log('Error signing up:', err.message);
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
  return { error, signUp, isPending }
}

export default useSignup
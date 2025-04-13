import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue';
import { auth } from '../firebase/configs';

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
        throw new Error('Could not complete signUp')
        }
        await updateProfile(res.user, { displayName })
        console.log(res.user);
        return res
    } catch (err) {
        console.log('Error signing up:', err.message);
        error.value = err.message
    }
}

const useSignup = () => {
  return { error, signUp }
}

export default useSignup
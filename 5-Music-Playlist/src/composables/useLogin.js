
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { projectAuth } from '@/firebase/config.js'; // Adjust the path as necessary


const error = ref(null);
const isPending = ref(false);
const login = async (email, password) => { 
  error.value = null;
  isPending.value = true;
  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password)
    // if (!res) {
    //   throw new Error('Could not complete login')
    // }
    // console.log('User logged in:', res.user);
    isPending.value = false;
    error.value = null;
    return res
  } catch (err) {
    // console.log('Error logging in:', err.message);
    error.value = err.message
    isPending.value = false;
    return error.value
  }
}

const useLogin = () => {
  return { error, login, isPending }
}   

export default useLogin;
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/configs';

const error = ref(null);

const login = async (email, password) => { 
  const error = ref(null)
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not complete login')
    }
    console.log('User logged in:');
    console.log(res.user);
    return res
  } catch (err) {
    console.log('Error logging in:', err.message);
    error.value = err.message
    return error.value
  }
}

const useLogin = () => {
  return { error, login }
}   

export default useLogin;
import { signOut } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/configs';

const error = ref(null);
const logout = async () => {
    error.value = null;
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err.message);
        error.value = 'Could not log out';
    }
};
const useLogout = () => {
    return { error, logout };
}
export default useLogout;
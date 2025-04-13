import { ref } from 'vue';
import { auth } from '../firebase/configs';

const user = ref( auth.currentUser);

auth.onAuthStateChanged((u) => {
  console.log('user', u);
  user.value = u ;
});

const getUser = () => { 
  return user;
}

export default getUser;

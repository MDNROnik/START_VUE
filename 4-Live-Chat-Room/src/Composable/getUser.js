import { ref } from 'vue';
import { auth } from '../firebase/configs.js';

const user = ref( auth.currentUser);

auth.onAuthStateChanged((u) => {
  // console.log('user', u);
  user.value = u ;
});

const getUser = () => { 
  return user;
}

export default getUser

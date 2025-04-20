import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const user = ref(projectAuth.currentUser)

// auth change listener
// when the user logs in or out
// the user value will be updated
// and the component will re-render
projectAuth.onAuthStateChanged(_user => {
  // console.log('User state change. Current user is:', _user)
  user.value = _user
});

const getUser = () => {
  return { user } 
}

export default getUser
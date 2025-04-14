<template>
  <nav>
    <div>
      <p v-if="user">Hey There... {{user.displayName}}</p>
      <p v-if="user" class="email">Currently Logged in as... {{user.email}}</p>
    </div>
    <button
      @click="handleClick"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Log Out
    </button>
  </nav>
</template>

<script setup>
import useLogout from "@/Composable/useLogout";
import getUser from "@/Composable/getUser";
import { useRouter } from "vue-router";

// import { auth } from '../firebase/configs';
// const user = auth.currentUser
// console.log( "current user: ",user) 

const user = getUser();
// console.log("user: ", user.value);


const router = useRouter();
const { error, logout } = useLogout();

const handleClick = async () => {
  try {
    await logout();
    // console.log("Logout successful");
  } catch (err) {
    error.value = err.message;
    // console.error("Logout failed:", error.value);
  }
  if (!error.value) {
    router.push({name: "home"});
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>

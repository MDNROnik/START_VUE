<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'Home' }">Voice Of Your Music</router-link>
      </h1>
      <div class="links">
        <span v-if="user" >{{ user.displayName }}</span>
        <router-link v-if="user" class="btn" :to="{ name: 'MyPlayList' }"
          >My Playlist</router-link
        >
        <router-link v-if="user" class="btn" :to="{ name: 'MadePlaylist' }"
          >Made Playlist</router-link
        >
        <button v-if="user" @click="handleClick">Logout</button>
        <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }"
          >Signup</router-link
        >
        <router-link v-if="!user" class="btn" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";

const { error, logout, isPending } = useLogout();
const { user } = getUser();
const router = useRouter();

console.log("user", user.value);

const handleClick = async () => {
  await logout();
  console.log("logged out");
  // router.push({ name: "Login" });
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>

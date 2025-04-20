<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    
    <button v-if="isPending">Loading...</button>
    <button v-else >Login</button>
  </form>
</template>

<script setup>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";

const { error, login, isPending } = useLogin();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  // console.log(111111);
  const res = await login(email.value, password.value);
  console.log(res.user);
  console.log(error.value);
  if (error) {
    console.log("user logged in");
  }
  else{
    console.log("login failed");
    error.value = res;
  }  
};
</script>

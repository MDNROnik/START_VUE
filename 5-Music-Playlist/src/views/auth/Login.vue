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
import { useRouter } from "vue-router";

const { error, login, isPending } = useLogin();
const router = useRouter();
const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  // console.log(111111);
  const res = await login(email.value, password.value);
  console.log(res.user);
  console.log(error.value);
  if (error.value === null) {
    console.log("user logged in", res.value);
    router.push({ name: "Home" });
  }
  else{
    console.log("login failed");
    error.value = res.value;
  }  
};
</script>

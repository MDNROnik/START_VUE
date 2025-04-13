<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" v-model="email" required />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      
      <div class="error">
        <p v-if="error" class="text-red-500 text-xs italic">{{ error }}</p>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import useLogin from "@/Composable/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const { error, login } = useLogin();
//refs
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  // console.log(email.value);
  // console.log("Login submitted with:", { email, password });
  const res = await login(email.value, password.value);
  if(res[0]==='F'){
    error.value = res;
    console.log(error.value);
  }
  else{
    router.push({name: "chat"});
  }
  
};
</script>

<style></style>

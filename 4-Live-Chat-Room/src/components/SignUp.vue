<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="Display Name"
        v-model="username"
        required
      />
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
        Sign Up
      </button>
    </form>
  </div>
</template>

<script setup>
import useSignup from "@/Composable/useSignup";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { error, signUp } = useSignup();
const router = useRouter();
//refs
const username = ref("");
const email = ref("");
const password = ref("");
const handleSubmit = async() => {
   const res = await signUp(email.value, password.value, username.value);
  //  console.log ("User signed up ");
  //  console.log(res.user);
   if(error.value === null){
     console.log("User signed up successfully");
     router.push({name: "chat"});
   }
   else{
     console.log("Error signing up user: ", error.value);
   }
};
</script>

<style></style>

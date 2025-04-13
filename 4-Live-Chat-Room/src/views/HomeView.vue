<template>
  <div class="welcome container">
    <div v-if="showSignUp">
      <SignUp />
      <p class="text-center">
        Already have Account ?
        <button class=" font-bold text-decoration-line: underline" @click="showSignUp = false"
          >Login</button
        >
      </p>
    </div>
    <div v-if="!showSignUp">
      <Login />
      <p class="text-center">
        Don't have an Account
        <button class="font-bold text-decoration-line: underline" @click="showSignUp = true"
          >Sign Up</button
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { ref } from "vue";
const showSignUp = ref(true);
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.container {
  width: 90%;
  max-width: 960px;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
}
</style>

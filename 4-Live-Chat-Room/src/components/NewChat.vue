<template>
  <form>
    <textarea
      @keypress.enter.prevent="sendMessage"
      placeholder="Type Your Message "
      v-model="message"
    ></textarea>

  </form>
</template>

<script setup>
import getUser from "@/Composable/getUser"; // Assuming getUser is the default export
import { timestamp } from "@/firebase/configs.js";

import { ref } from "vue";

const message = ref("");
const sendMessage = async () => {
  
  const chat = {
    message: message.value,
    sender: "NOW",
    timestamp: timestamp(),
  };
  console.log(chat);
  
  
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>

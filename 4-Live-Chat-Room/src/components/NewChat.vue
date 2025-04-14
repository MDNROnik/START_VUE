<template>
  <form>
    <textarea
      @keypress.enter.prevent="handleSubmit"
      placeholder="Type Your Message "
      v-model="message"
    ></textarea>
    <div v-if="err" class="error">{{ err }} blah</div>
  </form>
</template>

<script setup>
import getUser from "@/Composable/getUser";
import useCollection from "@/Composable/useCollection";
import { timestamp } from "@/firebase/configs";
import { ref } from "vue";
const err = ref(null);
const user = getUser();
// console.log("user: ", user.value);
// refs
const message = ref("");

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    email : user.value.email,
    message: message.value,
    createdAt: timestamp(),
  };
  // console.log(chat);
  const error = useCollection('messages', chat);
  if(!error.value) {
    message.value = "";
    console.log("message sent: ", chat);
  }
  else{
    err.value = error.value;
  }
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

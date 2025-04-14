<template>
  <div class="container">
    <NavBarChar />
    <ChatsWindow />
    <NewChat />
  </div>
</template>

<script setup>
import NavBarChar from "@/components/NavBarChar.vue";
import NewChat from "@/components/NewChat.vue";
import ChatsWindow from "@/components/ChatsWindow.vue";

import getUser from "@/Composable/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

const user = getUser();
const router = useRouter();

watch(user, ()=>{
  if (user.value) {
    // console.log("User data:", user.value);
  } else {
    // console.log("No user data available.");
    router.push({name: "home" });
  }
});

</script>



<style>
.container {
  width: 90%;
  max-width: 960px;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
}

</style>

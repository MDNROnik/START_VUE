<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h4>Create a New Playlist</h4>
      <input
        type="text"
        required
        placeholder="Playlist title"
        v-model="title"
      />
      <textarea
        required
        placeholder="Playlist description..."
        v-model="description"
      ></textarea>

      <div class="error"></div>
      <div v-if="user">
        <button v-if="!isPend">Made</button>
        <button v-else>Loading...</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
import { ref } from "vue";

const title = ref("");
const description = ref("");
const isPend = ref(false);
const { user } = getUser();

const handleSubmit = async () => {
  isPend.value = true;
  console.log(user.value);
  console.log(
    title.value,
    description.value,
    user.value.uid,
    user.value.displayName
  );
  const playlist = {
    title: title.value,
    description: description.value,
    userId: user.value.uid,
    userName: user.value.displayName,
    song: [],
    createdAt: timestamp(),
  };
  const { error, isPending } = await useCollection("playlists", playlist);

  if (!error) {
    title.value = "";
    description.value = "";
    console.log("Playlist created successfully!");
    console.log("isPending", isPending.value);
  } else {
    console.log(error.value);
  }
  isPend.value = false;
};
</script>

<style>
form {
  background: white;
}
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>

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
        <button v-else disabled>Loading...</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const description = ref("");
const isPend = ref(false);
const { user } = getUser();
const router = useRouter();

const handleSubmit = async () => {
  isPend.value = true;
  console.log(user.value);
  // console.log(
  //   title.value,
  //   description.value,
  //   user.value.uid,
  //   user.value.displayName
  // );
  const playlist = {
    title: title.value,
    description: description.value,
    userId: user.value.uid,
    userName: user.value.displayName,
    song: [],
    createdAt: timestamp(),
  };
  const { error, isPending, res } = await useCollection("playlists", playlist);

  // console.log("res loaded:", res.value.id);
  // console.log("error loaded:", error.value);

  if (!error.value) {
    console.log("Playlist created successfully!");
    router.push({ name: "PlayListDetails", params: { id: res.value.id } });
  } else {
    console.log(error.value);
  }
  isPend.value = false;
  title.value = "";
  description.value = "";
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

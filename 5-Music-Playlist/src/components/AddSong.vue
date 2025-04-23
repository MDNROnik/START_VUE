<template>
  <div class="add-song">
    <p>Songs: {{ document.song.length  }}</p>
    <button v-if="!showForm" @click="showForm = true">Add Songs</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a New Song</h4>
      <input type="text" placeholder="Song title" required v-model="title" />
      <input type="text" placeholder="Artist" required v-model="artist" />
      <button>Add</button>
      <div v-if="error">
        {{ error.value }}
      </div>
    </form>
  </div>
</template>

<script setup>
import updateDocument from "@/composables/updateDocument";
import uniqid from "uniqid";
import { ref, watchEffect } from "vue";
const { document, id } = defineProps(["document", "id"]);

const title = ref("");
const artist = ref("");
const showForm = ref(false);

const handleSubmit = async () => {
  //   console.log(uniqid());
  const newSong = {
    title: title.value,
    artist: artist.value,
    id: uniqid(),
  };
  document.song.push(newSong);
  const songs = ref(document.song);
  console.log("songs", songs.value);
  const { error } = updateDocument("playlists", songs, id);
  if (error.value) {
    console.log("error", error.value);
  } else {
    console.log("success", document);
  }
  
  title.value = "";
  artist.value = "";
  showForm.value = false;
  console.log("newDocument songs",songs.value );
};

watchEffect(() => {
  console.log("document", document, id);
});
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>

<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="document" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <h2>{{ document.title }}</h2>
      <p class="username">Created by {{ document.userName }}</p>
      <p class="description">{{ document.description }}</p>
      <button v-if="ownership">
        Delete Playlist
      </button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p>song list here</p>
    </div>
  </div>
</template>

<script setup>
const { id } = defineProps(["id"]);
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";

import { watchEffect, computed } from "vue";

const { user } = getUser();

const { document, error } = getDocument("playlists", id);

watchEffect(() => {
  if (document.value) {
    console.log("Document loaded:", document.value.userId);
    // console.log("User loaded:", user.value.uid);
  }
});

const ownership = computed(() => {
  return (
    document.value && user.value && user.value.uid == document.value.userId
  );
});
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>

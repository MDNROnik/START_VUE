<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="document" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <h2>{{ document.title }}</h2>
      <p class="username">Created by {{ document.userName }}</p>
      <p class="description">{{ document.description }}</p>
      <p>Songs: {{ document.song.length  }}</p>
      <button v-if="ownership" v-on:click="deleteDocument">
        Delete Playlist
      </button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p>song list here</p>
      <AddSong v-if="ownership" :document="newDocument" :id="id"/>
    </div>
  </div>
</template>

<script setup>
const { id } = defineProps(["id"]);
import getDocument from "@/composables/getDocument";
import getDeleteDocument from "@/composables/getDeleteDocument";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { watchEffect, computed, ref } from "vue";
import AddSong from "@/components/AddSong.vue";

const router = useRouter();
const { user } = getUser();
const newDocument = ref({});

const { document, error } = getDocument("playlists", id);

watchEffect(() => {
  if (document.value) {
    console.log("Document loaded:", document.value);
    // console.log("Document loaded:", document.value.userId);
    newDocument.value = document.value;
    // console.log("New document:", newDocument.value);
    // console.log("Document loaded:", document.value);
    // console.log("User loaded:", user.value.uid);
  }

});

const ownership = computed(() => {
  return (
    document.value && user.value && user.value.uid == document.value.userId
  );
});

const deleteDocument = () => {
  const { error } = getDeleteDocument("playlists", id);
  // console.log("deleted document with id:", id);
  // console.log("error:", error.value);
  if(!error.value){
    router.push({ name: "Home" });
  }
};


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

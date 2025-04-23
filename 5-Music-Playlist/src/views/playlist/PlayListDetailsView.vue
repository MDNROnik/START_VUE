<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="document" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <h2>{{ document.title }}</h2>
      <p class="username">Created by {{ document.userName }}</p>
      <p class="description">{{ document.description }}</p>
      <button v-if="ownership" v-on:click="deleteDocument">
        Delete Playlist
      </button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <div v-if="!document.song.length">
        No songs have been added to this playlist yet.
      </div>
      <div v-for="song in document.song" :key="song.id" class="single-song">
        <div class="details">
          <h3>{{ song.title }}</h3>
          <p>{{ song.artist }}</p>
        </div>
        <button v-if="ownership" @click="deleteSong(song.id)">delete</button>
      </div>
      <AddSong v-if="ownership" :document="newDocument" :id="id" />
    </div>
  </div>
</template>

<script setup>
const { id } = defineProps(["id"]);
import AddSong from "@/components/AddSong.vue";
import getDeleteDocument from "@/composables/getDeleteDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import updateDocument from "@/composables/updateDocument";
import { computed, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

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
  if (!error.value) {
    router.push({ name: "Home" });
  }
};

const deleteSong = (songId) => {
  document.value.song = document.value.song.filter((song) => (song.id !== songId) );
  console.log("Songs after deletion:", document.value.song);
  const songs = ref(document.value.song);
  console.log("songs", songs.value);
  const { error } = updateDocument("playlists", songs, id);
  if (error.value) {
    console.log("error", error.value);
  } else {
    console.log("success", document);
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
.single-song {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--secondary);
  margin-bottom: 20px;
}
</style>

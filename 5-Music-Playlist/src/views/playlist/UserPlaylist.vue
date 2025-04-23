<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
  </div>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="documents && documents.length === 0">Loading...</div>
  <div v-else>
    <SingleBlog :playlists="documents" />
  </div>
</template>

<script setup>
import SingleBlog from "@/components/SingleBlog.vue";
import getCollection from "@/composables/getCollection";
import getUser from "@/composables/getUser";
import { ref, watchEffect } from "vue";

const { documents, error } = getCollection("playlists");

const { user } = getUser();
const myDocuments = ref([]);
// watch for changes in documents
watchEffect(() => {
  if (documents.value) {
    console.log("Documents loaded:", documents.value);
    console.log("user", user.value.uid);
    documents.value = documents.value.filter(
      (doc) => doc.userId === user.value.uid
    );
  }
});
</script>

<style scoped>
h2 {
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--secondary);
}
.btn {
  margin-top: 20px;
}
</style>

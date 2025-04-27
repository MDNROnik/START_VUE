<template>
  <div>
    <div class="home">
      <h1>Welcome to Music Blog</h1>
    </div>
    <div v-if="error">{{ error }}</div>

    <SingleBlog :playlists="documents"/>
  </div>
</template>

<script setup>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, watchEffect } from "vue";
import SingleBlog from "@/components/SingleBlog.vue";

const { documents, error } = getCollection("playlists");

// watch for changes in documents
watchEffect(() => {
  if (documents.value) {
    console.log("Documents loaded:", documents.value);
  }
});

// format timestamp
const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time };
    });
  }
});
</script>

<style></style>

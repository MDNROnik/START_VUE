<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="documents.length === 0">No messages yet</div>
    <div v-else>
        <div v-for="doc in documents" :key="doc.id" class="single">
          <span class="created-at">
            {{ doc.createdAt }}
          </span>
          <span class="name">
            {{ doc.name }}
          </span>
          <span class="message">
            {{ doc.message }}
          </span>
        </div>
    </div>
    <h1>HELLO WORLD</h1>
  </div>
</template>

<script setup>
import getCollection from '@/Composable/getCollection.js';

const { documents, error } = getCollection ('messages');
console.log("documents: ", documents);


</script>

<style>

</style>
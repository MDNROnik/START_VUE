<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>

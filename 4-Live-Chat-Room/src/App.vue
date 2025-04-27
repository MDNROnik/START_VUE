<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="front">
    <div  style="text-align: center;">
      <h1>Chat Room</h1>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>

.front{
  height: 180px;
}

h1 {
  font-size: 3rem;
  color: #333;
}
</style>

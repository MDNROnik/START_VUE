<template>
  <div v-for="playlist in playlists" :key="playlist.id">
    <div class="single">
      <div class="info">
        <h3>{{ playlist.title }}</h3>
        <p>created by {{ playlist.userName }}</p>
      </div>
      <div class="song-number">
        <p>{{ playlist.song.length }} songs</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { playlists } = defineProps(['playlists'])
</script>

<style scoped>
.single {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin: 16px 0;
  transition: all ease 0.2s;
}
.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}

.info {
  margin: 0 30px;
}
.song-number {
  margin-left: auto;
}
</style>

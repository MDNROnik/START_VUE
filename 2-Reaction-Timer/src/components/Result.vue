<template>
    <h1>YOU TOOK {{ props.count }} miliseconds</h1>
</template>

<script setup>
const props = defineProps({
  count: Number,
});
</script>

<style></style>

<script setup>
const props = defineProps({
  filter: Function,
  current: String,
});

const updateFilter = (logic) => {
//   console.log(logic, props.current);
  props.filter(logic);
};
</script>

<template>
    <nav class="filter-nav">
      <button 
        @click="updateFilter('all')" 
        :class="{ active: props.current === 'all'}"
      >View all</button>
      <button 
        @click="updateFilter('completed')"
        :class="{ active: props.current === 'completed'}"
      >Completed</button>
      <button 
        @click="updateFilter('ongoing')"
        :class="{ active: props.current === 'ongoing'}"
      >Ongoing</button>
    </nav>
  </template>

<style>
  .filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  .filter-nav button.active {
    color: #555;
  }
</style>

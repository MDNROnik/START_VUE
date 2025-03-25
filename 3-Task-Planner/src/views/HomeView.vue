<script setup>
import FilterNavBar from "@/components/FilterNavBar.vue";
import SingleTask from "@/components/SingleTask.vue";
import { onMounted, ref } from "vue";
let tasks = ref([]);
let mainTasks = ref([]);
let current = ref("all");

onMounted(() => {
  fetch("http://localhost:3000/tasks")
    .then((res) => res.json())
    .then((data) => ((tasks.value = data), (mainTasks.value = data)))
    .catch((err) => console.log(err));
});

const handleDeleted = (id) => {
  console.log(id);
  tasks = tasks.filter((item) => {
    return item.id != id;
  });
  mainTasks.value = tasks;
};
const filter = (logic) => {
  // console.log(logic, current);
  current.value = logic;
  console.log("logic ", logic);
  console.log("current ", current.value);
  // if ((current.value = "completed")) {
  //   mainTasks = tasks.filter((item) => {
  //     return item.complete == true;
  //   });
  // }

};
</script>

<template>
  <FilterNavBar :filter="filter" :current="current" />
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <SingleTask :task="task" :handleDeleted="handleDeleted" />
      </div>
    </div>
  </div>
</template>

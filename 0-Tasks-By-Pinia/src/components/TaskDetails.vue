<template>
  <div class="task">
    <div class="task-details">
      <h2>{{ task.id }}</h2>
      <p>{{ task.name }}</p>
      <div class="icons">
        <i class="material-icons" @click="deleteTask(task.id)"
          >delete</i
        >
        <i
          class="material-icons"
          :class="{ active: task.isFav }"
          @click="taskStore.changeFav(task.id)"
          >favorite</i
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { task } = defineProps(["task"]);
import { useTaskStore } from "@/stores/TaskStore";
import { watchEffect } from "vue";

const taskStore = useTaskStore();
watchEffect(() => {
  if (!task.id) {
    taskStore.fetchTasks();
  } 
});
const deleteTask = (id) => {
  taskStore.removeTask(id);
  console.log("Deleting task with id:", id);
  console.log(taskStore.valueChange);
  taskStore.valueChange = true;
  console.log(taskStore.valueChange);
};
</script>

<style l></style>

<script setup>
import { ref, watchEffect } from "vue";
import logo from "./assets/pinia-logo.svg";
import AddTaskForm from "./components/AddTaskForm.vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";

const taskStore = useTaskStore();
taskStore.fetchTasks();

const nowSize = ref(0);
const now  = ref (false);
console.log(nowSize.value, taskStore.tasks.length);
console.log(taskStore.valueChange);


watchEffect(() => {
  if ( taskStore.valueChange) {
    taskStore.fetchTasks();
    nowSize.value = taskStore.tasks.length;
    console.log("Fetching tasks...");
    taskStore.valueChange = false;
    // console.log(nowSize.value, taskStore.tasks.length);
  }
  
});

const filter = ref("all");
</script>

<template>
  <main>
    <header>
      <img :src="logo" alt="logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="new-task-form">
      <AddTaskForm />
    </div>
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>
    <div class="task-list" v-if="filter === 'all'">
      <p>{{ taskStore.getTotalCount }} All Tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>{{ taskStore.getFavCount }} Fav Tasks</p>
      <div v-for="task in taskStore.getFav" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<style></style>

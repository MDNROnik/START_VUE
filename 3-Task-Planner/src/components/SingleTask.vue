<script setup>
import { ref } from "vue";

const props = defineProps({
  task: Object,
  handleDeleted: Function,
});

const details = ref(false);
const completed = ref(props.task.complete);
const url = "http://localhost:3000/tasks/" + props.task.id;
const urlEdit = "task/" + props.task.id;
const showDetails = () => {
  details.value = !details.value;
};

async function deleteTask() {
  //   try {
  //     await axios.delete(url);
  //     console.log(props.task.id);

  //     props.handleDeleted(props.task.id);
  //   } catch (error) {
  //     console.error("Fetch error:", error.message);
  //   }
  fetch(url, { method: "DELETE" })
    .then(() => props.handleDeleted(props.task.id))
    .catch((err) => console.log(err));
}

async function completedTask() {
  props.task.complete = !props.task.complete;
  completed.value = props.task.complete;
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.task),
    });
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div v-if="completed == true" class="project setGreen">
    <div class="actions">
      <h3 @click="showDetails">{{ task.title }}</h3>
      <div class="icons">
        <span class="material-icons tick" @click="completedTask"> done</span>
        <RouterLink
          class="p-5"
          :to="{ name: 'editTask', params: { id: task.id } }"
          ><span class="material-icons"> edit</span></RouterLink
        >
        <span class="material-icons" @click="deleteTask"> delete</span>
      </div>
    </div>
    <div class="invisible" :class="{ visible: details }">
      <p>{{ task.details }}</p>
    </div>
    <div>{{ task.id }}</div>
    <div>{{ task.complete }}</div>
  </div>

  <div v-else class="project">
    <div class="actions">
      <h3 @click="showDetails">{{ task.title }}</h3>
      <div class="icons">
        <span class="material-icons tick" @click="completedTask"> done</span>
        <RouterLink
          class="p-5"
          :to="{ name: 'editTask', params: { id: task.id } }"
          ><span class="material-icons"> edit</span></RouterLink
        >
        <span class="material-icons" @click="deleteTask"> delete</span>
      </div>
    </div>
    <div class="invisible" :class="{ visible: details }">
      <p>{{ task.details }}</p>
    </div>
    <div>{{ task.id }}</div>
    <div>{{ task.complete }}</div>
  </div>
</template>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
/* completed projects */
.setGreen {
  border-left: 4px solid #00ce89;
}
.setGreen .tick {
  color: #00ce89;
}
</style>

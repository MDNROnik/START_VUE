<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
let title = ref("");
let details = ref("");
const route2 = useRouter();
let task = ref();

const props = defineProps({
  id: Number,
});
const url = "http://localhost:3000/tasks/" + props.id;

onMounted(() => {
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      title.value = data.title;
      details.value = data.details;
      console.log(data);
    })
    .catch((err)=>console.log(err))  
});


const handleSubmit = () => {

  fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      details: details.value 
    }),
  })
    .then(() => {
      console.log(111111111);
      route2.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

</script>

<template>
  <div @submit.prevent="handleSubmit">
    <form class="body2">
      <label for="title">Title: </label>
      <input
        class="paddingColor"
        type="text"
        id="title"
        v-model="title"
        required
        name="title"
      />

      <label for="details">Details: </label>
      <textarea
        class="paddingColor"
        name="details"
        id="details"
        cols="30"
        rows="10"
        v-model="details"
        required
      ></textarea>
      <button>Update Task</button>
    </form>
  </div>
</template>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>

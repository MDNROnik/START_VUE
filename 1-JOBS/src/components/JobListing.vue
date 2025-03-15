<script setup>
import { defineProps, ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import SingleJob from "./SingleJob.vue";
import loader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: Number,
});
const state = ref(false);
const jobs = ref([]);
onMounted(
  async()=>{
    try{
      const response = await axios.get('http://localhost:3001/jobs');
      jobs.value = response.data;
      state.value = true;
    }catch(error){
      console.log(error);
    }
  }
)
</script>
<template>
  <div>
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div v-if="false" class="text-center text-gray-500 py-6">
          <loader />
        </div>
        <div v-else class="grid grid-cols-3 gap-3">
          <SingleJob
            v-for="job in jobs.slice(0, limit || jobs.length)"
            :key="job.id"
            :job="job"
          />
        </div>
      </div>
    </section>
    <section class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
  </div>
</template>

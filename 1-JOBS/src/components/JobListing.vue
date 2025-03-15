<script setup>
import { defineProps, ref } from "vue";
import jobsData2 from "../jobs copy.json";
import jobsData from "../jobs.json";
import SingleJob from "./SingleJob.vue";
import { RouterLink } from "vue-router";
const jobs = ref(jobsData.jobs);
const jobs2 = ref(jobsData2);
defineProps({
  limit: Number,
});
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-3 gap-3">
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
      to='/jobs'
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section> 
</template>

<script setup>
import JobListing from "../components/JobListing.vue";
import HomeCards from "../components/HomeCards.vue";
import Titles from "../components/Titles.vue";
</script>
<template>
    <Titles title="TEST PROPS" subTitle="Add Subtitles" />
    <HomeCards />
    <JobListing limit="3"/>
</template>

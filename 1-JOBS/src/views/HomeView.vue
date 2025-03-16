<script setup>
import JobListing from "../components/JobListing.vue";
import HomeCards from "../components/HomeCards.vue";
import Titles from "../components/Titles.vue";
</script>
<template>
    <Titles title="Are Your A Vue Developer ?" subTitle="Discover which Vue jobs suit your needs and skill set." />
    <HomeCards />
    <JobListing limit="3"/>
</template>

<script>
export default {
  setup() {},
};
</script>

<template>
  <nav class="main-nav">
    <RouterLink class="p-5" to="/">Home</RouterLink>
    <RouterLink class="p-5" to="/addTask">Add A New Task</RouterLink>
  </nav>
</template>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>

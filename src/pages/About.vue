<template>
  <div>
    About Page
    <div class="nav">
      <router-link to="/about/alice">Alice</router-link>
      <router-link to="/about/bob">Bob</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.nav {
  padding: 30px;
}
.nav a {
  padding: 0 8px;
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>

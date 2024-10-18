<template>
  <nav>
    <router-link to="/" class="text-decoration-none">Penilaian</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/absensi" class="text-decoration-none">Absensi</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

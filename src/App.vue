<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="rou">
    <router-link to="/">home</router-link>|
    <router-link to="/list">list</router-link>|
    <router-link to="/test">test</router-link>|
    <router-view></router-view>
  </div>
</template>

<style >
* {
  margin: 0px;
  padding: 0px;
  user-select: none;
  text-decoration: none;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.rou a {
  font-size: 30px;
  color: rebeccapurple;
}
.rou a.router-link-exact-active {
  color: #42b983;
}
</style>

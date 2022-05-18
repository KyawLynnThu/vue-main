<template>
  <div id="app">
    <div class=""></div>
    <nav-bar></nav-bar>
    <video-banner></video-banner>
    <!-- <login-form></login-form> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import LoginForm from './components/LoginForm.vue'
import VideoBanner from './components/VideoBanner.vue'

export default {
  name: 'App',
  components: {
    NavBar, VideoBanner
    // LoginForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

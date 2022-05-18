<template>
  <div id="app">
   <LoginView></LoginView>
   <SignUp></SignUp>
  </div>
</template>

<script>

import SignUp from './components/SignUp'
import LoginView from './components/LoginView'
export default {
  name: 'App',
  components: {
    SignUp,
    LoginView,
    
   
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-4 col-12 m-auto "> 
    <h2 class="text-center m-3">LOG IN</h2>
    <form @submit.prevent="submit" class="bg-light p-4">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" required>
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="password" class="form-control" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-dark btn-block text-uppercase font-weight-bold">log in</button>
      <button type="submit" class="btn btn-outline-dark btn-block text-uppercase mb-3 font-weight-bold">Register</button>
      <a class="text-decoration-none text-dark">Forgot Password?</a>
    </form>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name:"LoginView",

}
</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}
</style>
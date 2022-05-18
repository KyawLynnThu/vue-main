<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-4 col-12 m-auto "> 
    <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
    <form @submit.prevent="submit" class="bg-light p-4">
      <div class="form-group">
        <label for="name">Username</label>
        <input v-model="name" type="text" class="form-control" placeholder="Name" required>
        <p v-if="errorName" class="text-danger">{{errorName}}</p>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" class="form-control" placeholder="Email" required>
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password" required>
        <p v-if="errorPwd" class="text-danger">{{errorPwd}}</p>
      </div>
      <div class="form-group">
        <label for="">Confirm Password</label>
        <input type="password" class="form-control" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-dark btn-block text-uppercase font-weight-bold">Register</button>
      <button type="submit" class="btn btn-outline-dark btn-block text-uppercase font-weight-bold">log in</button>
    </form>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name:"SignUp",
  data(){
    return{
      name:"",
      email:"",
      password:"",
      errorName:"",
      errorPwd:""
    }
  },
  methods:{
    submit(){
      if(this.name.length < 3){
        this.errorName="Name must be at least 3 characters"
      }
      if(this.password.length < 8){
        this.errorPwd="Password must be at least 8 characters"
      }
    }
  }
}
</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}
</style>
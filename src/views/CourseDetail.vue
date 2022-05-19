<template>
  <div class="container-fluid ">
    <div class="row mt-3 pl-md-5">
      <div class="col-md-7 ">
        <div>
          <iframe 
          width="100%" height="315"
          src="https://www.youtube.com/embed/TAfLqDL-e9U" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
          </iframe>
        </div>
        <h5 class="mt-3">Title</h5>
        <p>Description</p>
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente tempora maxime similique, nulla, ut sunt facilis dolorum quia minus reprehenderit assumenda atque dolorem dolor quos, neque ipsum aliquid laboriosam.</p>
        <span class="vd-desc bg-dark text-white mb-3 p-2 text-center rounded d-inline-block" >Free</span>
        <p class="vd-price mx-1">$99.99</p>
        <button type="button" class="btn btn-dark btn-lg w-25">Add To Cart</button>

        
      </div>
       <div class="col-md-5 pr-md-5 mt-4 mt-md-0">
         <h2>Course Outline</h2>
         <button class="bg-dark text-white p-3 mb-1 d-block w-100 text-left">CHAPTER 1</button>
         <button class="bg-dark text-white p-3 mb-1 d-block w-100 text-left">CHAPTER 1</button>
      </div>
    </div>
    <div class="row pl-md-5">
      <div class="col-md-7">
        <form class="mt-4 bg-light">
          <div class="form-group p-2 mx-2">
            <p><label for="">Review</label></p>
            <textarea name="" id="" cols="50" rows="6" class="w-100"></textarea>
          </div>
          <div class="text-md-right"><button type="submit" class="btn btn-dark mb-3 mr-3">Submit</button></div>
        </form>
      </div>
    </div>
    <div class="row mt-5 pl-md-5">
      <div class="col-md-7">
          <h2>Reviews</h2>
          <div class="row">
            <div class="col-md-12 col-sm-4">
              <div class="card mb-3  bg-light">
                <div class="row no-gutters">
                  <div class="col-md-2  text-center">
                    <img src="../assets/dog.jpg" alt="" class="w-75 h-75 mt-4 ">
                  </div>
                  <div class="col-md-10 p-2">
                    <div class="card-body px-0 ml-sm-3 ml-5 ml-md-0">
                      <h5 class="card-title font-weight-bolder mb-4">Username</h5>
                      <p class="card-text pr-3">Should have more pratical stuff than theory part , with each practical stuff implemented clearly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="col-md-12 col-sm-4">
              <div class="card mb-3  bg-light">
                <div class="row no-gutters">
                  <div class="col-md-2  text-center">
                    <img src="../assets/dog.jpg" alt="" class="w-75 h-75 mt-4 ">
                  </div>
                  <div class="col-md-10 p-2">
                    <div class="card-body px-0 ml-sm-3 ml-5 ml-md-0">
                      <h5 class="card-title font-weight-bolder mb-4">Username</h5>
                      <p class="card-text pr-3">Should have more pratical stuff than theory part , with each practical stuff implemented clearly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="col-md-12 col-sm-4">
              <div class="card mb-3  bg-light">
                <div class="row no-gutters">
                  <div class="col-md-2  text-center">
                    <img src="../assets/dog.jpg" alt="" class="w-75 h-75 mt-4 ">
                  </div>
                  <div class="col-md-10 p-2">
                    <div class="card-body px-0 ml-sm-3 ml-5 ml-md-0">
                      <h5 class="card-title font-weight-bolder mb-4">Username</h5>
                      <p class="card-text pr-3">Should have more pratical stuff than theory part , with each practical stuff implemented clearly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button type="button" class="btn btn-dark btn-block">More Reviews</button>
        </div>
    </div>
    <div class="row mt-3 m-4">
      <div class="col-12">
        <h2 class="mb-3">You May Also Like</h2>
      </div>
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card shadow bg-white rounded">
        <img src="../assets/dog.jpg" alt="" class="w-100 h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Instructor</p>
            <p>$100</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card shadow bg-white rounded">
        <img src="../assets/dog.jpg" alt="" class="w-100 h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Instructor</p>
            <p>$100</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card shadow bg-white rounded">
        <img src="../assets/dog.jpg" alt="" class="w-100 h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Instructor</p>
            <p>$100</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card shadow bg-white rounded">
        <img src="../assets/dog.jpg" alt="" class="w-100 h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Instructor</p>
            <p>$100</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*.vd-desc{
  width:"100px"
}*/
.vd-price{
  font-size: 20px;
}
</style>
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SearchView from '../views/SearchView.vue';
import CategoryView from '../views/CategoryView.vue';
import CourseDetail from '../views/CourseDetail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component:HomeView
  },
  {
    path: "about",
    name: "About",
    component:AboutView
  },
  {
    path: "search",
    name: "Search",
    component:SearchView
  },
  {
    path: "category",
    name: "Category",
    component:CategoryView
  },
  {
    path: "detail",
    name: "Detail",
    component:CourseDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
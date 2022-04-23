import Vue from "vue";
import VueRouter from "vue-router";
import AlbumsView from "../views/AlbumsView.vue";
import AddView from "../views/AddView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AlbumsView,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

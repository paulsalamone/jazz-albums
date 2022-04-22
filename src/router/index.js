import Vue from "vue";
import VueRouter from "vue-router";
import ListView from "../views/ListView.vue";
import AddView from "../views/AddView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ListView,
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

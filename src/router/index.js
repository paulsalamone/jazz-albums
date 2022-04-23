import Vue from "vue";
import VueRouter from "vue-router";
// import AlbumsView from "../views/AlbumsView.vue";
import AlbumGrid from "../components/AlbumGrid.vue";
import AlbumShow from "../components/AlbumShow.vue";
import AddView from "../views/AddView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: AlbumsView,
  // },
  {
    path: "/",
    name: "home",
    component: AlbumGrid,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
  {
    path: "/album/:id",
    name: "album-show",
    component: AlbumShow,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

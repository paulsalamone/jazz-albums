import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "77890", name: "Lucky Prinzen" },
    genres: [
      "space bop",
      "ethnic noise",
      "be slop",
      "small band",
      "electrumpet",
      "five guys screaming",
      "soft funk",
      "toilet soul",
    ],
    albums: [
      {
        id: 66,
        artist: "nix",
        title: "auch nix",
        color1: "black",
        color2: "red",
        text1: "#00ff00",
        text2: "#00ff00",
        flex: "row",
        favorite: "false",
        featured: "true",
        img: "001",
      },
      {
        id: 66,
        artist: "xxxx",
        title: "???",
        color1: "purple",
        color2: "red",
        text1: "#ff0033",
        text2: "#ff0033",
        flex: "row",
        favorite: "false",
        featured: "true",
        img: "008",
      },
    ],
  },
  getters: {
    albumsLength: (state) => {
      return state.albums.length;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

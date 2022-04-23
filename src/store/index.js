import Vue from "vue";
import Vuex from "vuex";
import AlbumService from "@/services/AlbumService.js";
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
    albums: [],
  },
  getters: {
    albumsLength: (state) => {
      return state.albums.length;
    },
    getAlbumById: (state) => (id) => {
      return state.albums.find((album) => album.id === id);
    },
  },
  mutations: {
    ADD_ALBUM(state, album) {
      state.albums.push(album);
    },
  },
  actions: {
    createAlbum({ commit }, album) {
      return AlbumService.postAlbum(album).then(() => {
        commit("ADD_ALBUM", album);
        console.log("album committed");
      });
    },
  },
  modules: {},
});

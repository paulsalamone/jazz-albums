<template>
  <div class="album-grid">
    <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
  </div>
</template>

<script>
import AlbumCard from "../components/AlbumCard.vue";
import AlbumService from "@/services/AlbumService.js";

export default {
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: [],
    };
  },
  created() {
    AlbumService.getAlbums()
      .then((response) => {
        this.albums = response.data;
      })
      .catch((error) => {
        console.log("Sorry, Jazzbo, we had an error!", error.response);
      });
  },
};
</script>

<style>
.album-grid {
  padding: 10px;
  display: grid;
  grid-template-columns: 250px 250px 250px;

  /* grid-row: 1 / span 2; */
  /* grid-column: 1 / span 2; */

  grid-gap: 30px;
}
</style>

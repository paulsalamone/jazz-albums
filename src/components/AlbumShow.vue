<template>
  <div>
    <h1>THIS IS THE ALBUM:</h1>
    <div class="card" :style="{ backgroundColor: album.color1 }">
      <h4 :style="{ color: album.text1 }">{{ album.artist }}</h4>
      <h3 :style="{ color: album.text1 }">
        {{ album.title }}
      </h3>
    </div>
    <div class="card-photo">
      <img
        v-bind:src="require(`../assets/${album.img}.jpeg`)"
        alt="jazz photo"
      />
    </div>
  </div>
</template>

<script>
import AlbumService from "@/services/AlbumService.js";
export default {
  props: ["id"],
  data() {
    return {
      album: {},
    };
  },
  created() {
    AlbumService.getAlbum(this.id)
      .then((response) => {
        this.album = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style></style>

<template>
  <div>
    <div>
      <div class="eyebrow">
        <p class="current-albums">
          There are currently
          <span>{{ albumsLength }}</span>
          albums in your collection!
          <br />
          Selected: {{ selected }}
        </p>
        <p>FAVORITES: {{ favorites }}</p>
        <form>
          <label for="faves">Show: </label>
          <select name="favorites" id="" v-model="selected">
            <option value="all">all</option>
            <option value="favorites">favorites</option>
          </select>
        </form>
      </div>
    </div>
    <div class="album-grid" v-if="selected === 'all'">
      <AlbumCard
        v-for="album in albums"
        :key="album.id"
        :album="album"
        :favoritedAlbums="favoritedAlbums"
      />
    </div>
    <div class="album-grid" v-else>
      <AlbumCard
        v-for="album in albumsFavorited"
        :key="album.id"
        :album="album"
        :favoritedAlbums="favoritedAlbums"
      />
    </div>
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
      selected: "all",
    };
  },
  computed: {
    albumsLength() {
      // return this.$store.getters.albumsLength;
      return this.albums.length;
    },
    albumsFavorited() {
      return this.albums.filter((e) => {
        return e.favorite === "true";
      });
    },
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

<style scoped>
.album-grid {
  padding: 10px;
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 30px;
}
.current-albums span {
  font-family: "Abril Fatface";
  font-size: 1.6rem;
  font-weight: 100;
}
.eyebrow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
}
.parent-div {
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;
}

.current-albums {
  font-size: 1.2rem;
}
</style>

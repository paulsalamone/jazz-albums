<template>
  <div>
    <AlbumGrid />
  </div>
</template>

<script>
import AlbumGrid from "../components/AlbumGrid.vue";

export default {
  components: {
    AlbumGrid,
  },
  computed: {
    albumsLength() {
      return this.$store.getters.albumsLength;
    },
  },
};
</script>

<style scoped>
/* Abril+Fatface&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&family=Work+Sans: */
/* background-color: rgb(40, 118, 171); */

.eyebrow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 120px;
}
.parent-div {
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;
}

.current-albums {
  /* transform: translateY(-60px); */
  font-size: 1rem;
}

.current-albums span {
  font-family: "Abril Fatface";
  font-size: 1.6rem;
  font-weight: 100;
}
</style>

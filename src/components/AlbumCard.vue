<template>
  <div class="card-container">
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
    <div class="card-bottom">
      <p>Id: {{ album.id }}</p>
      <div @click="toggleLike" class="like-button">
        <font-awesome-icon
          v-if="likeStatus"
          icon="heart"
          :style="{ color: 'red' }"
        />
        <font-awesome-icon v-else icon="heart" :style="{ color: '#bbb' }" />
        <!-- <p>Favorited? >> {{ album.favorite }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
  },
  data() {
    return {
      likeStatus: false,
    };
  },
  components: {},
  methods: {
    toggleLike() {
      this.likeStatus = !this.likeStatus;
    },
  },
};
</script>

<style scoped>
.card-container {
  /* border: 1px solid red; */
}
.card {
  height: 250px;
  width: 250px;
  background-color: white;
  color: black;
  box-shadow: 5px 5px 2px rgb(95, 126, 147);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: absolute;
  z-index: 0;
}

/* .card-photo {
  position: relative;
  z-index: 1;
} */
.card-photo img {
  filter: grayscale(1);
  position: relative;
  z-index: 1;
  height: 250px;
  width: 250px;
  transform: translate(0px, 0px);
  mix-blend-mode: screen;
  opacity: 0.5;
  object-fit: cover;
}
.card-bottom {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transform: translate(5px, -10px);
}

h3 {
  font-family: "Abril Fatface";
  font-size: 2rem;
  line-height: 2rem;
  margin: 0px;
  width: 100px;
  z-index: 2;
  text-align: left;
  padding: 10px 10px;
  position: relative;
  /* mix-blend-mode: multiply; */
}
h4 {
  font-family: "Six Caps";
  font-size: 2.3rem;
  font-weight: 100;
  text-transform: uppercase;
  text-align: right;
  padding-right: 7px;
  margin: 0px;
  z-index: 2;
  letter-spacing: 2px;
  position: relative;
  /* mix-blend-mode: multiply; */
}

.like-button {
  /* border: 1px solid red; */
  padding: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>

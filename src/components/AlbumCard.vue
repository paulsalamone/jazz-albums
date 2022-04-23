<template>
  <div>
    <div class="card" :style="{ backgroundColor: album.color1 }">
      <h4 :style="{ color: album.text1 }">{{ album.artist }}</h4>
      <h3 :style="{ color: album.text2 }">
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
      <button>like</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
  },
};
</script>

<style scoped>
.card {
  height: 200px;
  width: 200px;
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
  height: 200px;
  width: 200px;
  transform: translate(-25px, 0px);
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
}

h3 {
  font-family: "Abril Fatface";
  font-size: 1.6rem;
  margin: 0px;
  width: 100px;
  z-index: 2;
  text-align: left;
  padding: 5px 10px;
  position: relative;
  /* mix-blend-mode: multiply; */
}
h4 {
  font-family: "Six Caps";
  font-size: 2.3rem;
  font-weight: 100;
  text-transform: uppercase;
  margin: 0px;
  z-index: 2;
  letter-spacing: 2px;
  position: relative;
  /* mix-blend-mode: multiply; */
}
button {
  height: 29px;
}
</style>

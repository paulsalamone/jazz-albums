<template>
  <div class="parent">
    <h1>Add LP:</h1>
    <div class="form">
      <form @submit.prevent="createAlbum">
        <label>Artist</label>
        <input type="text" v-model="album.artist" placeholder="artist name" />
        <br />
        <label>Title</label>
        <input type="text" v-model="album.title" placeholder="title" />
        <br />
        <label>Text Color</label>
        <input type="text" v-model="album.text1" placeholder="name or hex" />
        <br />
        <label>Image Color</label>
        <input type="text" v-model="album.color1" placeholder="name or hex" />
        <br />
        <label>Image #</label>
        <input type="text" v-model="album.img" placeholder="3 digits" />

        <button type="submit" value="Submit">submit</button>
      </form>
      {{ album }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      album: this.createFreshAlbumObject(),
    };
  },
  methods: {
    createAlbum() {
      this.$store
        .dispatch("createAlbum", this.album)
        .then(() => {
          // this.$router.push({
          //   name: "album-show",
          //   params: { id: this.album.id },
          // });
          this.album = this.createFreshAlbumObject();
        })
        .catch(() => {
          console.log("Sorry papa, no album made here!");
        });
    },
    createFreshAlbumObject() {
      const id = Math.floor(Math.random() * 100000);
      return {
        id: id,
        artist: "",
        title: "",
        text1: "",
        color1: "",
        img: "",
        favorite: "false",
      };
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Work Sans", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  text-align: left;
  /* padding: 0px 20px; */
  font-size: 6rem;
  color: #112;
  font-weight: 900;
  transform: rotate(-25deg) translate(-200px, 400px);
  text-shadow: 20px 45px 0px rgba(17, 17, 34, 0.191);
}

.parent {
  display: flex;
  justify-content: space-between;
}
form {
  padding: 30px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 2px solid red; */
  text-align: left;
}

input {
  margin: 10px;
  padding: 20px 10px 5px 10px;
  font-size: 2.2rem;
  color: orange;
  box-shadow: 5px 5px 0 #112;
  border-width: 0px;
  font-family: "Abril Fatface";
}

button {
  padding: 20px 20px 10px 30px;
  font-family: "Six Caps", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  font-size: 4rem;
  border-width: 0px;
  background-color: goldenrod;
  box-shadow: 5px 5px 0 #112, 10px 10px 10px rgba(17, 17, 34, 0.229);
  border-radius: 50%;
  margin-top: 30px;
  transform: translateX(300px);
  font-weight: 100;
}

button:hover {
  box-shadow: 5px 5px 0 #112, 10px 10px 20px rgba(17, 17, 34, 0.8);
  cursor: pointer;
}

button:active {
  transform: translate(302px, 2px) skew(-20deg);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: lightgrey;
  opacity: 1; /* Firefox */
  font-family: "Abril Fatface";
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: lightgrey;
  font-family: "Abril Fatface";
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: lightgrey;
  font-family: "Abril Fatface";
}
</style>

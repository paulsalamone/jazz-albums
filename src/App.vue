<template>
  <div id="app">
    <div>
      <div class="top-stuff">
        <JazzHeader />
        <TopNav />
      </div>
      <main><router-view /></main>
    </div>
    <!-- <footer>footer</footer> -->
  </div>
</template>

<script>
import JazzHeader from "./components/JazzHeader.vue";
import TopNav from "./components/TopNav.vue";
export default {
  components: {
    JazzHeader,
    TopNav,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  /* border: 1px solid grey; */
}
body {
  background-color: #112;
  color: #fffde6;
  font-weight: 400;
  margin: 0px;
  padding: 20px;
  width: 100%;
  box-sizing: content-box;
}
#app {
  font-family: "Work Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-between;
  height: 100vh;
}

.top-stuff {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
}

main {
  /* border: 5px solid blue; */
  background-color: rgb(40, 118, 171);
  height: 100%;
  /* padding: 20px; */
  width: 95%;
}
</style>

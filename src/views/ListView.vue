<template>
  <div class="parent-div">
    <div>
      <h2>hot!</h2>
      <h2>modern!</h2>
      <h2>jazz!</h2>
    </div>
    <section class="album-grid-section">
      <p class="current-albums">
        There are currently <span>[#]</span> albums in your collection!
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Abril+Fatface&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&family=Work+Sans: */
/* background-color: rgb(40, 118, 171); */

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
}

.album-grid-section {
  /* border: 4px solid black; */
  background-color: rgb(138, 153, 164);
  mix-blend-mode: hard-light;
  transform: translate(30px, 30px);
}
h2 {
  font-family: "Six Caps", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  transform: rotate(-25deg);
  font-size: 4rem;
  letter-spacing: 3px;
  font-weight: 100;
  margin: 0px 10px 0px 10px;
  text-align: left;
  color: rgb(119, 179, 219);
}
</style>

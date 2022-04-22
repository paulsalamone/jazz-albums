<template>
  <nav>
    <router-link to="/">Album List</router-link>
    <router-link to="/add">Add LP</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100%;
  /* height: 30px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* border: 1px yellow solid; */
  background-color: #112;
  margin: 10px 10px 10px 10px;
}
nav a {
  color: #fffde6;
  text-decoration: none;
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
}

nav a:hover {
  color: rgb(119, 179, 219);
}

router-link {
  margin: 10px;
}
</style>
